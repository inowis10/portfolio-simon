# 🎯 Guía para Configurar Git en tu Proyecto

## Paso 1: Reiniciar VS Code
1. Cierra VS Code completamente
2. Vuelve a abrirlo
3. Abre la terminal integrada (Ctrl + `)

## Paso 2: Verificar que Git está instalado
```bash
git --version
```
Deberías ver algo como: `git version 2.x.x`

## Paso 3: Configurar tu identidad en Git (solo la primera vez)
```bash
git config --global user.name "Tu Nombre"
git config --global user.email "tu@email.com"
```

## Paso 4: Inicializar el repositorio Git
```bash
git init
```

## Paso 5: Crear archivo .gitignore
Ya lo he creado para ti en el proyecto. Este archivo le dice a Git qué archivos ignorar.

## Paso 6: Hacer tu primer commit (guardar la versión actual)
```bash
git add .
git commit -m "Versión estable - CSS restaurado y funcionando"
```

## 🎉 ¡Listo!

Ahora tienes tu proyecto bajo control de versiones. 

### Comandos útiles para el futuro:

**Ver el estado de tus archivos:**
```bash
git status
```

**Guardar cambios nuevos:**
```bash
git add .
git commit -m "Descripción de los cambios"
```

**Ver historial de cambios:**
```bash
git log --oneline
```

**Volver a una versión anterior:**
```bash
git log --oneline  # Copia el código del commit
git checkout [código-del-commit]
```

**Volver a la última versión:**
```bash
git checkout main
```

---

💡 **Tip:** Haz commits frecuentes con mensajes descriptivos. Por ejemplo:
- "Agregado nuevo componente de contacto"
- "Corregido bug en navegación"
- "Mejorado diseño de tarjetas"
