# Prueba técnica - QA Integral

Automatización UI con Cypress 

## Ejecutar local
npm install  
npm run cypress:open

## Tests incluidos
- 01_login.spec.js

## Estructura
Cypress + GitHub Actions

# Módulo Funcional — MakersPay

**Objetivo:** Diseñar y documentar el proceso de testing manual para el flujo principal de la billetera MakersPay: autenticación, consulta de saldo y envío de dinero usando número de celular.

**Alcance:** Validar reglas de negocio clave: montos mínimos y máximos, validaciones de saldo, prohibición de transferirse a sí mismo, registro de movimientos y mensajes de error claros.

**Entregables:**
- Plan de pruebas
- Estrategia de pruebas
- Casos de prueba detallados
- Matriz de trazabilidad
- Plantilla de reporte de bugs
- Plantilla de ejecución y evidencias

# Tarea Técnica – Reqres Pro (QA / Postman)

## Descripción

Esta colección de Postman automatiza el flujo de pruebas solicitado para la API **Reqres Pro**, siguiendo la lógica:

1. Crear un usuario con POST.
2. Validar que el usuario creado se puede leer con GET.

> Nota: Reqres Pro no soporta GET `/users/{id}`; cada path Pro guarda un solo objeto. El flujo de POST → GET por path cumple la lógica de "extraer ID y validar usuario".

---

## Estructura del proyecto

---

## Requisitos

- Postman (v9+ recomendado)
- API Key Pro de Reqres

---

## Variables de entorno (Environment) en Postman

Crea un Environment llamado `ReqresPro` con las siguientes variables:

| Variable   | Valor                          |
|-----------|--------------------------------|
| `base_url`| `https://reqres.in/api/custom` |
| `api_key` | TU_API_KEY (al ser la version Pro se puede generar una API_Key con permisos especiales) |
| `path`    | `users`                        |

> Reemplaza `TU_API_KEY` con tu key Pro real.

---

## Flujo de pruebas

### 1. Crear usuario

- Endpoint: `POST {{base_url}}/{{path}}`
- Headers:
  - `x-api-key: {{api_key}}`
  - `Content-Type: application/json`
- Body JSON:

```json
{
  "name": "Test User",
  "job": "Automation Engineer"
}

Tests incluidos:

Status 200 o 201

Extraer id a variable pro_user_id

Validar createdAt y updatedAt

---

### 2. Validar usuario creado

- Endpoint: GET {{base_url}}/{{path}}

- Header: x-api-key: {{api_key}}


Tests incluidos:

Status 200

ID coincide con pro_user_id

name y job coinciden con POST


Este GET sustituye el GET /users/{id} solicitado originalmente, adaptado a la lógica de Reqres Pro.

