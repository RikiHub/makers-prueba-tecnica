# Casos de Prueba — MakersPay (detallados)

---

### TC-FUNC-001
**Título:** Login exitoso(Happy Path)
**Módulo:** Autenticación  
**Precondiciones:** Cuenta activa con credenciales válidas  
**Datos:** user: user1@example.com / pass: Pass123!  
**Pasos:** 1) Abrir app; 2) Ingresar user; 3) Ingresar pass; 4) Click Iniciar sesión  
**Resultado esperado:** Redirige a dashboard, muestra saldo.  
**Prioridad:** Alta | **Tipo:** Funcional

---

### TC-FUNC-002
**Título:** Login con contraseña incorrecta  
**Precondiciones:** Cuenta existe  
**Datos:** user1@example.com / pass: contraseña_incorrecta 
**Pasos:** 1) Abrir app; 2) Ingresar user; 3) Ingresar pass; 4) Click Iniciar sesión  
**Resultado esperado:** Mensaje “Credenciales inválidas”. No login.  
**Prioridad:** Alta | **Tipo:** Negativo

---

### TC-FUNC-003
**Título:** Visualizar saldo  
**Módulo:** Dashboard  
**Precondiciones:** Usuario logueado  
**Datos:** -  
**Pasos:** Ir a dashboard  
**Resultado esperado:** Saldo visible con formato $X.XX COP
**Prioridad:** Alta | **Tipo:** UI/Funcional

---

### TC-FUNC-004
**Título:** Envío exitoso entre usuarios (E2E)  
**Precondiciones:** 
- UserA saldo $100.000 COP  
- UserB existe  
**Datos:** from: userA (cel: 5001112222), to: userB (cel: 5002223333), monto: 25.000  
**Pasos:** 1) Login UserA; 2) Ir a Enviar; 3) Ingresar cel destinatario; 4) Ingresar monto; 5) Confirmar; 6) Verificar saldo e historial en ambos.  
**Resultado esperado:** 
- Saldo UserA = 75.000  
- Saldo UserB => 25.000  
- Movimiento registrado en ambos con fecha y estado “Completado”.  
**Prioridad:** Alta | **Tipo:** Funcional / Integración

---

### TC-FUNC-005
**Título:** No permitir enviar a sí mismo (Caso Negativo)
**Precondiciones:** Usuario logueado  
**Datos:** destino = mismo número del remitente, monto=10.000  
**Pasos:** 1) Login UserA; 2) Ir a Enviar; 3) Ingresar cel destinatario; 4) Ingresar monto; 5) Confirmar; 
**Resultado esperado:** Mensaje “No puedes enviarte dinero a ti mismo.” Transacción no procesada.  
**Prioridad:** Alta | **Tipo:** Validación / Negativo

---

### TC-FUNC-006
**Título:** Saldo insuficiente (Caso Negativo)
**Precondiciones:** UserC saldo = 5.000  
**Datos:** monto = 50.000, destino existente  
**Pasos:** Intentar envío  
**Resultado esperado:** Mensaje “Saldo insuficiente.” Saldo no cambia.  
**Prioridad:** Alta | **Tipo:** Negativo

---

### TC-FUNC-007
**Título:** Monto mínimo permitido ($5.000)  
**Precondiciones:** Usuario logueado  
**Datos:** monto = 5.000 (y adicional: 4.999)  
**Pasos:** Enviar 5.000 → confirmar; Enviar 4.999 → confirmar  
**Resultado esperado:** 5.000 → permitido; 4.999 → error “El monto mínimo es $5.000”.  
**Prioridad:** Media | **Tipo:** Boundary Value

---

### TC-FUNC-008
**Título:** Monto máximo permitido ($2.000.000)  
**Precondiciones:** Usuario logueado  
**Datos:** monto = 2.000.010 
**Pasos:** Enviar monto  
**Resultado esperado:** 2.000.001 → error “El monto máximo es $2.000.000”.  
**Prioridad:** Media | **Tipo:** Boundary Value

---

### TC-FUNC-009
**Título:** Registro de movimiento en historial  
**Precondiciones:** Transacción exitosa reciente  
**Datos:** -  
**Pasos:** Abrir historial en remitente y destinatario  
**Resultado esperado:** Movimiento con fecha, monto, contraparte y estado “Completado”.  
**Prioridad:** Media | **Tipo:** Funcional / UI

---

### TC-FUNC-010
**Título:** Validación input monto (no numérico)  
**Precondiciones:** Usuario logueado  
**Datos:** monto = "abc123"  
**Pasos:** Intentar ingresar texto en monto y enviar  
**Resultado esperado:** Campo rechaza caracteres no numéricos o muestra error claro.  
**Prioridad:** Media | **Tipo:** Validación
