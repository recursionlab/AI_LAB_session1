# Fix Dyadignore and Avatar Issues - Approved Plan

## Steps:
- [x] 1. Edit .dyadignore: Update supabase comment, narrow env patterns, remove global media wildcards, add targeted dirs.
- [x] 2. Edit src/app/page.tsx: Enhance useEffect error logging and config validation.
- [x] 3. Edit src/components/avatar/ExportOptions.tsx: Add async/await to copy handlers, img.onerror, UTF8-safe btoa in share.
- [x] 4. Verify no lint errors: pnpm lint (if available).
- [x] 5. Test: URL invalid config (toast error), clipboard fail (error toast), PNG load fail (error), share unicode (safe), ignore patterns (.env.local ignored).

Progress tracked here after each step.

