# Matthew Parker Heardle
A version of [Sam-Bowman-Heardle](https://github.com/Pi-Boy-314/Sam-Bowman-Heardle/) updated/changed to feature Matthew Parker's music

## Updates/Changes Made
- Features Matthew Parker's music
- Improved process for adapting Heardles to other artists (see scripts folder)

📖 **[Complete Setup Guide](docs/SETUP.md)**

## Project Setup

```sh
npm install
```

### Keep the song list current

```sh
python tools/sync_music.py            # dry run: what has he released since?
python tools/sync_music.py --apply    # add it
python tools/sync_music.py --repair   # find replacements for dead YouTube links
python tools/download_audio.py        # fetch the 32s clips
```

### Deploy

`vercel --prod` is the only way to ship. Pushing to GitHub deliberately does
**not** deploy: the audio clips are gitignored, so a build from the repository
would serve a silent site. See [docs/SETUP.md](docs/SETUP.md).

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```
