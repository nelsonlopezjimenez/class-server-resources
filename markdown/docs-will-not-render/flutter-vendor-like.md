## **Flutter Doesn't Have Built-in Vendoring**

But here are **similar approaches** for offline work:

---

## **Option 1: Cache Dependencies (Simplest)**

```bash
# Download all dependencies to local cache
flutter pub get

# Dependencies are cached in:
# Windows: C:\Users\<username>\AppData\Local\Pub\Cache
# Mac/Linux: ~/.pub-cache

# Flutter will use cache when offline
flutter build apk  # Works offline if deps cached
```

---

## **Option 2: Path Dependencies (Manual Vendoring)**

Edit `pubspec.yaml` to use local copies:

```yaml
dependencies:
  # Instead of:
  # http: ^1.0.0
  
  # Use local path:
  http:
    path: ./vendor/http-1.0.0
```

**Setup:**
```bash
mkdir -p vendor
cd vendor
# Download package source manually or clone from GitHub
git clone https://github.com/dart-lang/http.git http-1.0.0
cd ..
flutter pub get
```

---

## **Option 3: Local Pub Server (Advanced)**

```bash
# 1. Install pub_server
dart pub global activate pub_server

# 2. Create local mirror
mkdir local_packages
cd local_packages

# 3. Run local server
dart pub global run pub_server -p 8080 --directory .

# 4. Point Flutter to local server
# Set PUB_HOSTED_URL environment variable
set PUB_HOSTED_URL=http://localhost:8080

flutter pub get
```

---

## **Option 4: Commit .pub-cache (Not Recommended)**

```bash
# Copy pub cache to project
cp -r ~/.pub-cache ./vendor-cache

# Set environment variable
set PUB_CACHE=./vendor-cache

flutter pub get
```

---

## **Best Practice for Offline Teaching:**

```bash
# Before going offline:
flutter pub get          # Cache all deps
flutter precache         # Cache Flutter SDK artifacts
flutter doctor           # Verify everything works

# This ensures students can work offline
```

---

## **Quick Answer:**

**No exact "vendor" equivalent**, but `flutter pub get` caches everything locally. As long as you've run it once with internet, Flutter works offline.

**For teaching without internet:** Ensure all students run `flutter pub get` while online once, then they're good to go offline.