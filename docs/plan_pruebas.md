# Plan de Pruebas — MakersPay

## 1. Información general
- **Producto:** MakersPay (billetera digital)
- **Módulo:** Envío de dinero por número de celular (incluye login y consulta de saldo)
- **Responsable QA:** Ricardo Caballin Torres
- **Fecha de creación:** 2025-12-09

## 2. Objetivos de la prueba
- Verificar que un usuario autenticado pueda enviar dinero a otro usuario registrado usando su número de celular, cumpliendo las reglas de negocio.
- Asegurar que las validaciones de monto y saldo funcionen correctamente.
- Comprobar que los movimientos queden registrados en el historial de ambos usuarios.
- Documentar mensajes de error y comportamiento en fallos.

## 3. Alcance
**Incluye:**
- Login (autenticación)
- Consulta de saldo
- Flujo de envío por número de celular
- Validaciones de negocio (monto mínimo/máximo, saldo, envíos a sí mismo)
- Registro de movimientos en historial

**Excluye:**
- Integraciones con pasarelas de pago reales
- Pruebas de rendimiento / estrés
- Pruebas de seguridad profundas (solo validaciones básicas)

## 4. Criterios de entrada
- Entorno de pruebas disponibles (URL o build)
- Cuentas de prueba creadas con saldos controlados
- Acceso al historial de movimientos
- Documentación de requisitos y reglas de negocio (este documento)

## 5. Criterios de salida
- Casos críticos (Prioridad Alta) ejecutados y pasados
- No hay defectos bloqueantes abiertos

## 6. Cronograma
- Preparación de entorno y test data: 1 hora
- Diseño de casos y revisión: 30 minutos
- Ejecución pruebas manuales: 4 horas
- Reporte y cierre: 30 minutos

## 7. Recursos
- QA Tester: Ricardo Caballin Torres
- Acceso a cuentas de prueba: lista en `docs/evidencias/test_data.md`

## 8. Riesgos
- Datos inconsistentes entre entornos
- Bugs en build que impidan ejecutar casos
- Falta de acceso a cuentas o historial

## 9. Entregables
- `docs/casos_prueba.md`
- `docs/plan_pruebas.md`
- `docs/reporte_evidencias.md`
- `Issues en el repo con reportes de bugs`
