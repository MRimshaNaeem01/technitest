#!/usr/bin/env python3
"""
Project structure setup script for Next.js (Python version).
Creates a clean folder structure, generates reusable components,
and sets up global theming with CSS variables and a Google Font.
"""

import os
import shutil
from pathlib import Path
import re

# ============================================================
# CONFIGURATION – customize these to your liking
# ============================================================
PROJECT_ROOT = Path.cwd()
SRC_DIR = PROJECT_ROOT / 'src'
APP_DIR = SRC_DIR / 'app'
LAYOUT_FILE = APP_DIR / 'layout.tsx'

# Font settings (using next/font)
FONT_FAMILY = 'Inter'
FONT_IMPORT = "import { Inter } from 'next/font/google';"
FONT_INIT = f"const inter = Inter({{ subsets: ['latin'], variable: '--font-inter' }});"
FONT_CLASS = 'inter.variable'

# Color palette (CSS variables)
COLOR_VARS = """
  /* Primary colors */
  --color-primary: #3b82f6;
  --color-primary-dark: #2563eb;
  --color-secondary: #64748b;
  --color-accent: #8b5cf6;
  --color-background: #ffffff;
  --color-foreground: #0f172a;
  --color-muted: #f1f5f9;
  --color-muted-foreground: #64748b;
  --color-border: #e2e8f0;
  --color-card: #ffffff;
  --color-card-foreground: #0f172a;
"""

# ============================================================
# Helper functions
# ============================================================
def ensure_dir(path: Path):
    if not path.exists():
        path.mkdir(parents=True, exist_ok=True)
        print(f"📁 Created: {path.relative_to(PROJECT_ROOT)}")

def write_file(path: Path, content: str):
    if path.exists():
        print(f"⚠️  File already exists: {path.relative_to(PROJECT_ROOT)} (skipped)")
        return
    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"✅ Created: {path.relative_to(PROJECT_ROOT)}")

def backup_file(path: Path):
    if path.exists():
        backup = path.with_suffix(path.suffix + '.backup')
        shutil.copy2(path, backup)
        print(f"📦 Backup created: {backup.relative_to(PROJECT_ROOT)}")

# ============================================================
# 1. Create folder structure
# ============================================================
print('\n📂 Setting up folder structure...')
folders = [
    'components/layout',
    'components/ui',
    'styles',
    'lib',
    'types',
]
for f in folders:
    ensure_dir(SRC_DIR / f)

# ============================================================
# 2. Create globals.css with CSS variables
# ============================================================
GLOBAL_CSS = SRC_DIR / 'styles' / 'globals.css'
global_css_content = f"""
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {{
  :root {{
    /* Font family (will be set via next/font) */
    --font-family: var(--font-inter), system-ui, sans-serif;

    /* Colors */
    {COLOR_VARS}
  }}

  html {{
    font-family: var(--font-family);
    background-color: var(--color-background);
    color: var(--color-foreground);
  }}

  body {{
    margin: 0;
    min-height: 100vh;
  }}
}}
"""
write_file(GLOBAL_CSS, global_css_content)

# ============================================================
# 3. Create utility file (shadcn/ui style)
# ============================================================
UTILS_FILE = SRC_DIR / 'lib' / 'utils.ts'
utils_content = """
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
"""
write_file(UTILS_FILE, utils_content)

# ============================================================
# 4. Create reusable components
# ============================================================

# Header
HEADER_FILE = SRC_DIR / 'components' / 'layout' / 'Header.tsx'
header_content = """
import Link from 'next/link';

export function Header() {
  return (
    <header className="border-b border-border bg-background px-4 py-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-primary">
          MyApp
        </Link>
        <nav className="hidden space-x-6 md:flex">
          <Link href="/" className="hover:text-primary">Home</Link>
          <Link href="/about" className="hover:text-primary">About</Link>
          <Link href="/contact" className="hover:text-primary">Contact</Link>
        </nav>
        <button className="md:hidden">☰</button>
      </div>
    </header>
  );
}
"""
write_file(HEADER_FILE, header_content)

# Footer
FOOTER_FILE = SRC_DIR / 'components' / 'layout' / 'Footer.tsx'
footer_content = """
export function Footer() {
  return (
    <footer className="border-t border-border bg-muted px-4 py-6">
      <div className="container mx-auto text-center text-sm text-muted-foreground">
        &copy; {new Date().getFullYear()} MyApp. All rights reserved.
      </div>
    </footer>
  );
}
"""
write_file(FOOTER_FILE, footer_content)

# Card
CARD_FILE = SRC_DIR / 'components' / 'ui' / 'Card.tsx'
card_content = """
import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface CardProps {
  title?: string;
  description?: string;
  children?: ReactNode;
  className?: string;
}

export function Card({ title, description, children, className }: CardProps) {
  return (
    <div className={cn('rounded-lg border border-border bg-card p-6 shadow-sm', className)}>
      {title && <h3 className="text-lg font-semibold text-card-foreground">{title}</h3>}
      {description && <p className="mt-1 text-sm text-muted-foreground">{description}</p>}
      {children && <div className="mt-4">{children}</div>}
    </div>
  );
}
"""
write_file(CARD_FILE, card_content)

# ============================================================
# 5. Update root layout.tsx
# ============================================================
print('\n📝 Updating layout.tsx...')
if LAYOUT_FILE.exists():
    backup_file(LAYOUT_FILE)
    with open(LAYOUT_FILE, 'r', encoding='utf-8') as f:
        content = f.read()

    # Insert font import if not present
    if 'next/font/google' not in content:
        # Find the last import line
        import_lines = re.findall(r'^import .*?;', content, re.MULTILINE)
        if import_lines:
            last_import = import_lines[-1]
            content = content.replace(last_import, last_import + '\n' + FONT_IMPORT)
        else:
            content = FONT_IMPORT + '\n' + content

        # Insert font initialization before export default
        if 'export default' in content:
            content = content.replace('export default', f'{FONT_INIT}\n\nexport default')
        else:
            # fallback: before the function definition
            content = re.sub(r'(function\s+Layout)', f'{FONT_INIT}\n\n\\1', content)

        # Add font class to <html>
        html_pattern = r'(<html)([^>]*)>'
        match = re.search(html_pattern, content)
        if match:
            attrs = match.group(2)
            if 'className=' in attrs or 'class=' in attrs:
                # add to existing className
                content = re.sub(
                    r'(<html[^>]*className=")([^"]*)(")',
                    f'\\1\\2 {FONT_CLASS}\\3',
                    content
                )
            else:
                # add new className
                content = re.sub(
                    r'(<html)([^>]*)>',
                    f'\\1\\2 className="{FONT_CLASS}">',
                    content
                )

        # Add import for global CSS
        if '@/styles/globals.css' not in content:
            import_lines = re.findall(r'^import .*?;', content, re.MULTILINE)
            if import_lines:
                last = import_lines[-1]
                content = content.replace(last, last + "\nimport '@/styles/globals.css';")
            else:
                content = "import '@/styles/globals.css';\n" + content

        with open(LAYOUT_FILE, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"✅ Updated {LAYOUT_FILE.relative_to(PROJECT_ROOT)}")
    else:
        print(f"ℹ️  layout.tsx already uses next/font. Skipping font injection.")
else:
    print(f"⚠️  layout.tsx not found at {LAYOUT_FILE}. Please update manually.")

# ============================================================
# 6. Optional: Update tailwind.config.js / .ts
# ============================================================
tailwind_configs = [PROJECT_ROOT / 'tailwind.config.js', PROJECT_ROOT / 'tailwind.config.ts']
tailwind_file = None
for f in tailwind_configs:
    if f.exists():
        tailwind_file = f
        break

if tailwind_file:
    print(f'\n🔧 Updating {tailwind_file.relative_to(PROJECT_ROOT)}...')
    with open(tailwind_file, 'r', encoding='utf-8') as f:
        content = f.read()

    if 'fontFamily' not in content:
        # Try to add fontFamily inside theme.extend
        if 'extend:' in content:
            # Insert after 'extend: {'
            content = re.sub(
                r'(extend:\s*\{)',
                r'\1\n    fontFamily: {\n      sans: [\'var(--font-inter)\', \'system-ui\', \'sans-serif\'],\n    },',
                content
            )
        else:
            # Try to add a full theme block if not present
            if 'theme:' not in content:
                # Add after module.exports =
                content = re.sub(
                    r'(module\.exports\s*=\s*\{)',
                    r'\1\n  theme: {\n    extend: {\n      fontFamily: {\n        sans: [\'var(--font-inter)\', \'system-ui\', \'sans-serif\'],\n      },\n    },\n  },',
                    content
                )
            else:
                # If theme exists but no extend, add extend
                content = re.sub(
                    r'(theme:\s*\{)',
                    r'\1\n    extend: {\n      fontFamily: {\n        sans: [\'var(--font-inter)\', \'system-ui\', \'sans-serif\'],\n      },\n    },',
                    content
                )
        with open(tailwind_file, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"✅ Updated tailwind config with font family.")
    else:
        print(f"ℹ️  tailwind config already has fontFamily defined.")
else:
    print(f"ℹ️  No tailwind.config.js/ts found – skipping Tailwind customization.")

# ============================================================
# 7. Final message
# ============================================================
print('\n🎉 Setup complete!')
print('📌 Next steps:')
print('1. If you have existing Header/Footer/Card components, move their logic into the new files.')
print('2. Delete the old component files to avoid confusion.')
print('3. Install missing dependencies if needed (clsx, tailwind-merge):')
print('   npm install clsx tailwind-merge')
print('4. Run `npm run dev` to see your new theming in action.')
print('5. Customize colors and fonts by editing src/styles/globals.css and the font import in layout.tsx.\n')