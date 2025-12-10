# Bugs Detectados — Módulo Funcional MakersPay

---

## 🐞 BUG-001 — El sistema permite enviar un monto inferior al mínimo permitido (.000 COP)

**Prioridad:** Alta  
**Severidad:** Alta  
**Componente:** Envío de dinero  
**Fecha:** 2025-12-09  
**Reportado por:** Ricardo Caballin  
**Entorno:** QA / Mock App  

### Descripción  
El sistema permite procesar transacciones con un monto inferior al mínimo permitido de 5.000 COP.

### Precondiciones  
- Usuario autenticado  
- Saldo disponible mayor a 5.000 COP  

### Pasos para reproducir  
1. Ingresar a la opción *Enviar Dinero*.  
2. Digitar un número de celular válido.  
3. Ingresar un monto: 3.000 COP. 
4. Dar clic en *Confirmar*.

### Resultado esperado  
- El sistema debe bloquear la transacción.  
- Debe mostrar el mensaje: **"El monto mínimo permitido es 5.000 COP."**

### Resultado actual  
- El sistema procesa la transacción exitosamente.  

---

## 🐞 BUG-002 — El sistema permite enviar dinero al mismo número del remitente

**Prioridad:** Alta  
**Severidad:** Crítica  
**Componente:** Validación de teléfono  
**Fecha:** 2025-12-10  
**Reportado por:** Ricardo Caballin  
**Entorno:** QA / Mock App  

### Descripción  
El sistema permite realizar envíos al mismo número de celular del usuario remitente, incumpliendo la regla de negocio establecida.

### Precondiciones  
Usuario autenticado.

### Pasos para reproducir  
1. Ir al módulo *Enviar Dinero*.  
2. Ingresar el **mismo número de celular** asociado a la cuenta del remitente.  
3. Ingresar un monto válido.  
4. Confirmar la transacción.

### Resultado esperado  
- Mostrar mensaje: **"No puedes enviarte dinero a ti mismo."**  
- La transacción debe ser cancelada.

### Resultado actual  
- El sistema procesa el envío normalmente.

---

## 🐞 BUG-003 — El saldo no se actualiza automáticamente tras una transacción exitosa

**Prioridad:** Media  
**Severidad:** Alta  
**Componente:** Saldos / UI  
**Fecha:** 2025-12-10  
**Reportado por:** Ricardo Caballin  
**Entorno:** QA / Mock App  

### Descripción  
Tras realizar un envío exitoso, el saldo del usuario no se actualiza en pantalla hasta que se recarga manualmente la página.

### Precondiciones  
- Usuario autenticado  
- Transacción válida realizada

### Pasos para reproducir  
1. Visualizar el saldo inicial.  
2. Realizar un envío de dinero válido.  
3. Regresar a la pantalla principal / dashboard.  

### Resultado esperado  
- El saldo debería reflejar el descuento inmediatamente.

### Resultado actual  
- El saldo solo cambia al recargar la página manualmente.

---
