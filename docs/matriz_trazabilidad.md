# Matriz de trazabilidad — MakersPay

| Req ID | Requerimiento (resumido)                                      | Casos de prueba relacionados |
|--------|--------------------------------------------------------------|------------------------------|
| R1     | Usuario autenticado puede iniciar sesión                     | TC-FUNC-001, TC-FUNC-002     |
| R2     | Usuario puede ver su saldo                                   | TC-FUNC-003                  |
| R3     | Enviar dinero usando número de celular                       | TC-FUNC-004, TC-FUNC-009     |
| R4     | Monto mínimo $5.000 COP                                      | TC-FUNC-007                  |
| R5     | Monto máximo $2.000.000 COP                                  | TC-FUNC-008                  |
| R6     | No enviar más que saldo disponible                           | TC-FUNC-006                  |
| R7     | No enviar a mismo número                                      | TC-FUNC-005                  |
| R8     | Registro de movimiento en historial de ambos                 | TC-FUNC-004, TC-FUNC-009     |
| R9     | Si falla, no se afecta el saldo y se muestra mensaje claro   | TC-FUNC-006, TC-FUNC-005     |
