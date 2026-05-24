const SITE = {
  name: 'VPN-RHD',
  tagline: 'Secure VPN & Smart Downloader for iOS',
  contactEmail: '631601108@qq.com',
  appVersion: '0.1.0',
  iosVersion: '18.0',
  appStoreLink: '#'
};

const NAV_ITEMS = [
  { label: 'Home', href: 'index.html' },
  { label: 'Features', href: 'index.html#features' },
  { label: 'Privacy', href: 'privacy.html' },
  { label: 'Support', href: 'support.html' }
];

const FEATURES = [
  {
    icon: '&#x1F310;',
    title: 'VPN with sing-box',
    desc: 'Multi-protocol support. Import subscription links in one tap. TUN-mode system-wide proxy powered by the sing-box core.'
  },
  {
    icon: '&#x26A1;',
    title: 'Smart Routing',
    desc: 'Multiple profiles with automatic URL-based latency testing. Always connects you to the fastest server.'
  },
  {
    icon: '&#x2B07;&#xFE0F;',
    title: 'Media Downloader',
    desc: 'Paste any video URL and download as MP4 or extract audio as MP3. Powered by the yt-dlp engine running locally on your device.'
  },
  {
    icon: '&#x1F3A5;',
    title: 'iOS-Optimized Playback',
    desc: 'Auto-detects codec compatibility. Transcodes to H.264 via hardware-accelerated VideoToolbox when needed.'
  },
  {
    icon: '&#x1F4E5;',
    title: 'Batch File Management',
    desc: 'Select multiple files at once. Batch share, save to Photos, or delete. Long-press for quick actions, swipe to delete.'
  },
  {
    icon: '&#x1F512;',
    title: 'Privacy First',
    desc: 'Zero analytics SDKs. Zero data collection. All VPN configs, download history, and files stay on your device.'
  }
];

const STEPS = [
  { num: 1, title: 'Import', desc: 'Paste a subscription link or manual sing-box configuration.' },
  { num: 2, title: 'Connect', desc: 'One tap to establish a secure tunnel to your server.' },
  { num: 3, title: 'Download', desc: 'Paste a video URL. Download and convert to iOS-compatible MP4.' }
];

const FAQ = [
  {
    q: 'How do I set up a VPN connection?',
    a: 'Open the Profiles tab, tap the add button, and import your server configuration via subscription link or by pasting a manual sing-box config. Then toggle the VPN switch on the Home screen.'
  },
  {
    q: 'Where are downloaded files saved?',
    a: 'Files are saved in the app\'s local storage. Access them by tapping the folder icon in the Download tab. You can play videos, share files to other apps, or save MP4 videos to your Photos library.'
  },
  {
    q: 'How do I batch delete or share files?',
    a: 'Tap "Select" in the Downloaded Files screen to enter batch mode. Check the files you want, then use the toolbar buttons to batch share, save to Photos, or delete. You can also long-press any file for quick actions or swipe left to delete.'
  },
  {
    q: 'Does the VPN keep logs of my activity?',
    a: 'VPN-RHD itself does not log anything. It is a client-side app that connects to servers you configure. Any logging depends entirely on the VPN server you choose.'
  },
  {
    q: 'What video sites are supported?',
    a: 'The download feature is powered by yt-dlp, which supports thousands of websites. Just paste a video URL and choose your format.'
  }
];

const TECH_STACK = [
  { name: 'sing-box', url: 'https://github.com/SagerNet/sing-box' },
  { name: 'yt-dlp', url: 'https://github.com/yt-dlp/yt-dlp' },
  { name: 'FFmpeg', url: 'https://ffmpeg.org' },
  { name: 'Python 3.14', url: 'https://python.org' }
];
