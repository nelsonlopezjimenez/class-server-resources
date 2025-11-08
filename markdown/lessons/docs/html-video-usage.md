Great question! There are several ways to add a poster image to a video element. Here's how:

## Method 1: Using the `poster` Attribute (Best Method)

```html
<video controls poster="images/cobbler-thumbnail.jpg">
    <source src="videos/cobbler_video.mp4" type="video/mp4">
    Your browser does not support the video tag.
</video>
```

**This is the standard, built-in way!**
- Shows your image before the video plays
- Automatically displays until user clicks play
- No extra CSS needed

## Method 2: Poster with Preload Control

```html
<video 
    controls 
    poster="images/cobbler-thumbnail.jpg"
    preload="none">
    <source src="videos/cobbler_video.mp4" type="video/mp4">
    Your browser does not support the video tag.
</video>
```

**Attributes explained:**
- `poster="path/to/image.jpg"` - Your custom thumbnail
- `preload="none"` - Doesn't load video until user clicks (saves bandwidth)
- `preload="metadata"` - Loads just the video info
- `preload="auto"` - Loads entire video (default)

## Method 3: Custom Overlay (More Control)

If you want more design control (like the AllRecipes purple overlay):

```html
<div class="video-container">
    <video id="myVideo">
        <source src="videos/cobbler_video.mp4" type="video/mp4">
    </video>
    <div class="video-overlay" id="videoOverlay">
        <img src="images/cobbler-thumbnail.jpg" alt="Video Thumbnail">
        <div class="play-button">▶</div>
        <div class="video-text">
            How to Make<br><strong>Peach Cobbler</strong>
        </div>
    </div>
</div>
```

```css
.video-container {
    position: relative;
    width: 100%;
    border-radius: 8px;
    overflow: hidden;
}

video {
    width: 100%;
    height: auto;
    display: block;
}

.video-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;
}

.video-overlay img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.play-button {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80px;
    height: 80px;
    background-color: rgba(255, 255, 255, 0.9);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    color: #d14d28;
}

.video-text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: rgba(106, 47, 145, 0.9);
    color: white;
    padding: 1rem 1.5rem;
    border-radius: 8px;
    text-align: center;
    font-size: 1.25rem;
    pointer-events: none; /* Click passes through to overlay */
}

/* Hide overlay when video plays */
.video-overlay.hidden {
    display: none;
}
```

```javascript
// JavaScript to handle play button
const video = document.getElementById('myVideo');
const overlay = document.getElementById('videoOverlay');

overlay.addEventListener('click', function() {
    video.play();
    overlay.classList.add('hidden');
});

// Show overlay again when video ends
video.addEventListener('ended', function() {
    overlay.classList.remove('hidden');
});
```

## Method 4: Simple Click-to-Play with Image

```html
<div class="video-wrapper">
    <img 
        src="images/cobbler-thumbnail.jpg" 
        alt="Play video"
        id="videoThumb"
        style="cursor: pointer; width: 100%; border-radius: 8px;">
    <video 
        id="actualVideo" 
        controls 
        style="width: 100%; border-radius: 8px; display: none;">
        <source src="videos/cobbler_video.mp4" type="video/mp4">
    </video>
</div>

<script>
    document.getElementById('videoThumb').addEventListener('click', function() {
        this.style.display = 'none';
        const video = document.getElementById('actualVideo');
        video.style.display = 'block';
        video.play();
    });
</script>
```

## 🎯 Recommended for Your Project

For the Peach Cobbler recipe, I recommend **Method 1 (poster attribute)** for simplicity:

```html
<!-- In your HTML -->
<video 
    controls 
    poster="images/cobbler-video-poster.jpg"
    preload="metadata"
    style="width: 100%; border-radius: 8px; margin-bottom: 1.5rem;">
    <source src="videos/cobbler_video.mp4" type="video/mp4">
    Your browser does not support the video tag.
</video>
```

**Why this is best:**
- ✅ Built-in HTML5 feature
- ✅ Works on all modern browsers
- ✅ No JavaScript needed
- ✅ Accessible
- ✅ Mobile-friendly
- ✅ SEO-friendly

## 📸 Creating the Perfect Poster Image

**Best practices:**
1. **Same aspect ratio** as your video (usually 16:9)
2. **Same resolution** as video (or close to it)
3. **File format:** JPG or PNG
4. **File size:** Optimize for web (under 200KB)
5. **Content:** Show an interesting frame from the video

### Example sizes:
```
1920×1080px  (1080p video)
1280×720px   (720p video)
854×480px    (480p video)
```

## 🎨 AllRecipes Style with Poster

To match the AllRecipes design from your screenshot:

```html
<div class="video-container">
    <video 
        controls 
        poster="images/cobbler-grid-thumb.jpg"
        preload="none">
        <source src="videos/cobbler_video.mp4" type="video/mp4">
    </video>
    <div class="video-label">
        <span>How to Make</span>
        <strong>Peach Cobbler</strong>
    </div>
</div>
```

```css
.video-container {
    position: relative;
    width: 100%;
    border-radius: 8px;
    overflow: hidden;
    margin-bottom: 1.5rem;
}

.video-container video {
    width: 100%;
    height: auto;
    display: block;
}

.video-label {
    position: absolute;
    bottom: 20px;
    right: 20px;
    background-color: rgba(106, 47, 145, 0.9);
    color: white;
    padding: 0.75rem 1.25rem;
    border-radius: 6px;
    font-size: 1rem;
    text-align: center;
    pointer-events: none; /* Can click through to video controls */
}

.video-label span {
    display: block;
    font-size: 0.875rem;
    font-weight: 400;
}

.video-label strong {
    display: block;
    font-size: 1.125rem;
    font-weight: 700;
}
```

## 🐛 Troubleshooting

### Problem: Poster image doesn't show
**Solutions:**
1. Check file path is correct
2. Make sure image file exists
3. Check browser console for errors
4. Try absolute path: `/images/poster.jpg`

### Problem: Poster image looks stretched
**Solution:**
```html
<video controls poster="images/poster.jpg" style="object-fit: cover;">
```

### Problem: Video shows black screen first
**Solution:**
```html
<video controls poster="images/poster.jpg" preload="none">
```

### Problem: Want different poster on mobile
**Solution:**
```html
<video controls preload="none">
    <source src="videos/cobbler.mp4" type="video/mp4">
</video>

<style>
video {
    background-image: url('images/poster-mobile.jpg');
    background-size: cover;
    background-position: center;
}

@media (min-width: 768px) {
    video {
        background-image: url('images/poster-desktop.jpg');
    }
}
</style>
```

## ✅ Quick Answer Summary

**Simplest way:**
```html
<video controls poster="images/your-thumbnail.jpg">
    <source src="videos/your-video.mp4" type="video/mp4">
</video>
```

That's it! The `poster` attribute is exactly what you need. 🎬