# Estrategia de Pruebas — MakersPay

## Objetivo
Describir técnicas, tipos de pruebas y enfoque para cubrir reglas de negocio del envío de dinero.

## Enfoque general
- Priorizar pruebas manuales exploratorias y de caja negra en el flujo end-to-end.
- Diseñar casos que cubran condiciones límite (boundary values) y casos negativos (invalid inputs).
- Documentar evidencias (screenshots, logs) y registrar bugs en formato reproducible.

## Técnicas a utilizar
- **Partición equivalencia:** dividir montos en rangos válidos/invalidos (ej. <5000, 5000..2000000, >2000000).
- **Análisis de valores límite:** probar exactamente $5.000, $4.999, $2.000.000, $2.000.001.
- **Casos de uso / escenarios end-to-end:** flujo completo login → saldo → enviar → verificar historial.
- **Pruebas de estado y flujo:** verificar saldo antes/después y consistencia entre cuentas.
- **Pruebas de error:** mensajes claros en pantalla y no modificación de saldo.

## Tipos de pruebas
- Funcionales (obligatorio)
- UI / Usabilidad (mensajes y formatos)
- Regresión (re-ejecución tras fixes)

## Prioridades
- **Alta:** reglas de negocio críticas (monto mínimos/máximos, saldo insuficiente, no enviar a sí mismo, registro de movimientos)
- **Media:** validaciones UI y formatos
- **Baja:** UI no crítica

## Herramientas
- Pruebas manuales: navegador + captura de pantalla (o móvil si aplica)
- Registro de bugs: Issues en GitHub
- Documentación: Markdown en `docs/`

## Evidencias
- Capturas de pantalla del before/after (saldo)
- Registro de pasos reproducibles en cada bug

## Criterios de aceptación
- Todos los casos de prioridad alta pasan
- Todos los bugs críticos resueltos o con plan de mitigación
