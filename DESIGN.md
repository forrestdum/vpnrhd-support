# VPN-RHD 产品官网 - 需求文档

## 0. 背景与约束

- **产品**：VPN-RHD，iOS 端 VPN 客户端 + 视频下载二合一 App
- **目标市场**：美区 App Store
- **当前 App 版本**：0.1.0，Build 1
- **系统要求**：iOS 18.0+
- **Bundle ID**：com.duanrenhua.vpnrhd
- **网站目的**：
  - 提供 App Store 审核所需的**隐私政策 URL** 和**支持 URL**
  - 作为产品官网，展示 App 实际功能、引导下载
- **硬性约束**：
  - 网站上的功能和性能描述**必须与 App 实际代码一致**，不得夸大或虚构
  - 所有第三方组件均需在隐私政策中如实列出

---

## 1. App 实际功能清单（来源于代码，不可随意增删）

| # | 功能 | 代码依据 | 说明 |
|---|------|----------|------|
| 1 | VPN 隧道 | `VPNStore.swift`, `PacketTunnelProvider.swift` | sing-box 内核 via Libbox，TUN 模式 |
| 2 | 订阅链接导入 | `ProfilesView.swift` | 粘贴订阅 URL 自动拉取配置 |
| 3 | 多线路负载 | `SingBoxConfigFactory.swift:28-38` | 多 profile 时自动 URL 测速（urlTest），选最优线路 |
| 4 | 路由模式选择 | `SingBoxConfigFactory.swift:40-46` | 代理模式 / 直连模式 |
| 5 | 流量统计 | `TrafficStatsView.swift` | 显示上传/下载流量 |
| 6 | 视频下载 | `DownloadView.swift`, `EmbeddedYTDLPExecutor.swift` | yt-dlp 引擎，MP4 视频模式 |
| 7 | 音频提取 | `DownloadView.swift` mode=mp3 | yt-dlp 提取音频转 MP3 |
| 8 | 编码兼容检测 | `EmbeddedYTDLPExecutor.swift:240-242` | 自动判断 iOS 是否可播，不可播则 FFmpeg 转码 |
| 9 | VideoToolbox 硬编码 | `EmbeddedYTDLPExecutor.swift:316` | h264_videotoolbox 硬件加速转 H.264 |
| 10 | 文件列表 | `DownloadView.swift:192-236` | 查看已下载的 MP4/MP3 文件 |
| 11 | 内置播放器 | `DownloadedMediaPlayerView` | AVPlayer 播放已下载视频 |
| 12 | 单文件操作 | `DownloadView.swift:238-254` | 长按弹出菜单：分享/存相册/删除；左滑删除 |
| 13 | 批量操作 | `DownloadView.swift:269-304` | 选择模式：批量分享、批量存相册、批量删除 |
| 14 | 相册保存 | `DownloadManager.swift:152-175` | PHPhotoLibrary 保存 MP4 到系统相册 |
| 15 | 无追踪 | grep analytics/tracking → 空 | 零 analytics SDK，无数据收集 |

---

## 2. 技术方案

### 2.1 技术选型

| 项目 | 选型 | 理由 |
|------|------|------|
| 托管 | GitHub Pages | 免费 HTTPS，自动部署 |
| 域名 | `forrestdum.github.io/vpnrhd-support` | 先 GitHub 二级域名，后续可绑自定义 |
| 前端 | 纯静态 HTML/CSS/JS | 无需后端，三页面 |
| CSS | 手写（参考企业官网规格） | 不吃框架依赖，轻量可控 |
| JS | 原生 JS | 导航渲染、footer 复用、Intersection Observer 动效 |
| 响应式 | 三断点 | 520px / 860px |

### 2.2 项目结构

```
vpnrhd-support/
├── index.html
├── privacy.html
├── support.html
├── css/
│   ├── reset.css
│   └── common.css
├── js/
│   ├── data.js          # 页面内容数据（features, FAQ 等）
│   └── common.js        # 导航渲染、footer 渲染、动效
└── images/
    ├── app-icon.png      # App 图标（从 Assets.xcassets 导出）
    ├── screenshots/      # App 截图（实拍，不带 mockup 壳）
    └── common/           # favicon 等
```

---

## 3. 页面设计

### 3.1 主页 (index.html)

**导航栏**（sticky，毛玻璃 `backdrop-filter`）
- Logo：App 图标 + "VPN-RHD"
- 菜单项：Home / Features / Privacy / Support
- 右侧 CTA：App Store 下载按钮（未上架前用占位链接 `#`）

**Hero**
- 左侧：标签 "Available on iOS" · 标题 "VPN + Smart Downloader" · 2 句副标题 · App Store 按钮 + Learn More 锚点
- 右侧：iPhone 设备上的 App 真实截图（非 mockup 渲染图）

**Features（6 卡片，3×2）**
基于 §1 功能清单拆分：

1. **VPN with sing-box** — 多协议支持，订阅链接一键导入，TUN 模式全局代理
2. **Smart Routing** — 多线路自动测速，选最快节点
3. **Media Downloader** — 粘贴链接下载视频 (MP4) 或提取音频 (MP3)
4. **iOS-Optimized Playback** — 自动检测编码兼容性，硬件加速转为 H.264
5. **Batch File Management** — 多选文件，批量分享/存相册/删除
6. **Privacy First** — 零 analytics、零追踪、全部数据留在设备本地

**How It Works**（3 步）
1. Import — 导入订阅链接或粘贴配置
2. Connect — 一键连接 VPN
3. Download — 粘贴链接，下载转码一条龙

**CTA**（渐变背景）
- "Ready to try?" + App Store 按钮
- 小字：iOS 18.0+ · iPhone · Free

**Footer**
- 左：Logo + 一句话
- 中：Legal（Privacy Policy / Support）
- 右：Tech Stack（sing-box / yt-dlp / FFmpeg / Python 3.14）

### 3.2 隐私政策 (privacy.html)

基于 §1 功能清单的真实技术栈编写，必须包含：

1. 概述 — App 是什么
2. 我们不收集的数据 — 明确列出
3. VPN 配置 — 本地存储，无服务端
4. 下载功能 — yt-dlp + Python 3.14 本地运行
5. 内嵌第三方组件：
   - sing-box (via Libbox) — VPN 隧道
   - yt-dlp — 视频下载
   - FFmpeg — 媒体转码
   - Python 3.14 — 脚本运行时
6. 网络使用 — 仅 VPN 隧道和用户指定的下载
7. 相册权限 — 仅在用户主动保存时访问
8. 儿童隐私
9. 更新说明
10. 联系方式

### 3.3 支持页面 (support.html)

1. 联系邮箱
2. FAQ（可折叠）：
   - 如何导入订阅链接配置 VPN？
   - 下载的视频存在哪里？
   - 如何批量删除/分享文件？
   - VPN 会记录我的上网记录吗？
3. App 基本信息：版本 0.1.0 · iOS 18.0+ · iPhone

---

## 4. 设计规格

### 4.1 品牌

| 项 | 值 |
|------|------|
| 主色 | `#2563eb` |
| 辅色 | `#1e3a5f` |
| 背景 | `#ffffff` / `#f5f5f7` |
| 标题色 | `#1d1d1f` |
| 正文色 | `#555` / `#666` |
| 字体 | system font stack（SF Pro Display 优先） |
| 圆角 | 12-16px 卡片 / 全圆角按钮 |
| 阴影 | 轻投影，hover 加深 |

### 4.2 响应式

| 断点 | 变化 |
|------|------|
| ≥861px | 双栏 hero，3 列 features |
| 521-860px | 单栏 hero，2 列 features |
| ≤520px | 单栏全部，1 列 features，汉堡菜单 |

### 4.3 动效

- Intersection Observer 淡入上移
- 卡片 hover 微上浮 + 阴影
- 克制、不花哨

---

## 5. 待确认事项

| # | 问题 | 当前状态 |
|---|------|----------|
| 1 | 域名 | GitHub 二级域名，后续绑自定义 |
| 2 | App 图标 | 需从 Xcode Assets.xcassets 导出 1024px |
| 3 | App Store 链接 | 未上架，先用 `#` 占位 |
| 4 | 截图 | 需在 iPhone 16 Pro Max 上实拍 6.9" 截图 |
| 5 | 联系邮箱 | 631601108@qq.com |
| 6 | 语言 | 英（面向美区） |

---

## 6. 开发计划

| 阶段 | 内容 |
|------|------|
| P0 | CSS（reset + common）+ JS（导航/footer/动效） |
| P1 | 主页（hero + features + steps + CTA） |
| P2 | 隐私政策 + 支持页面 |
| P3 | App 图标 + 真实截图替换 |
| P4 | App Store 链接替换 + 自定义域名（可选） |
