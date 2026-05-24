# VPN-RHD 产品官网 - 需求文档

## 0. 背景

- **产品**：VPN-RHD，iOS 端 VPN + 视频下载二合一 App
- **目标市场**：美区 App Store
- **当前状态**：App 功能开发基本完成，准备上架
- **网站目的**：
  - 提供 App Store 审核所需的**隐私政策 URL** 和**支持 URL**
  - 作为产品官网，展示 App 功能、引导下载
  - 后续可作为推广落地页

---

## 1. 技术方案

### 1.1 技术选型

| 项目 | 方案 | 理由 |
|------|------|------|
| 托管 | GitHub Pages | 免费，自带 HTTPS，CI/CD 简单 |
| 域名 | `forrestdum.github.io/vpnrhd-support` | 先用 GitHub 二级域名，后续可绑自定义域名 |
| 前端 | 纯静态 HTML/CSS/JS | 无后端需求，加载快，维护简单 |
| CSS 方案 | 手写 CSS（参考企业官网规格） | 不引入框架依赖，保持轻量 |
| JavaScript | 原生 JS，组件化渲染 | 导航、footer 等复用模块抽取到 JS |
| 响应式 | 移动优先，三断点 | 确保手机/平板/桌面体验一致 |

### 1.2 项目结构

```
vpnrhd-support/
├── index.html          # 主页
├── privacy.html        # 隐私政策
├── support.html        # 支持页面
├── css/
│   ├── reset.css       # CSS Reset
│   └── common.css      # 全局样式（导航、按钮、排版、布局、响应式）
├── js/
│   ├── data.js         # 页面内容数据（功能列表、FAQ 等）
│   └── common.js       # 公共逻辑（导航渲染、footer 渲染、动效）
└── images/
    ├── hero/           # 首屏相关图
    ├── screenshots/    # App 截图
    └── common/         # 通用图标、favicon 等
```

---

## 2. 页面设计

### 2.1 主页 (index.html) —— "产品官网"

**定位**：像一个正经的 App 产品官网，不是简陋的政策页面。

**结构（自上而下）：**

1. **导航栏**（sticky，毛玻璃效果）
   - Logo（App 图标 + "VPN-RHD"）
   - 菜单：Home / Features / Privacy / Support
   - 右侧 CTA 按钮："Download on App Store"

2. **Hero 首屏**
   - 左侧文字：
     - 小标签 "Now Available on iOS"
     - 大标题 "Secure VPN + Smart Downloader"
     - 副标题 2-3 句话说明核心价值
     - 两个按钮：App Store 下载 + 了解更多
   - 右侧：App 截图（iPhone 框架 mockup）或设备模型图

3. **数据条 / Stats**（可选）
   - 3-4 个数字亮点，如：
     - 支持 1000+ 视频网站
     - 零数据收集
     - iOS 18+ 原生体验
     - 全本地处理

4. **功能亮点 (Features)**
   - 6 张卡片，3×2 网格
   - 每张卡片：图标 + 标题 + 一句话描述
   - 功能点：
     - Secure VPN (sing-box)
     - Media Downloader (yt-dlp)
     - On-Device Processing
     - iOS-Optimized Video (H.264 VideoToolbox)
     - Batch Operations (多选批量操作)
     - Zero Logs / No Tracking

5. **工作原理 (How It Works)**
   - 3 步横向排列
   - 步骤编号 1-2-3
   - Import Config → Connect → Download

6. **底部 CTA**
   - 渐变背景
   - "Ready to get started?" + App Store 按钮
   - 小字：iOS 18+ · iPhone · Free

7. **Footer**
   - 左：品牌名 + 一句话
   - 中：Legal（Privacy Policy / Support）
   - 右：Tech Stack（sing-box / yt-dlp / FFmpeg）
   - 底部 copyright

### 2.2 隐私政策 (privacy.html) —— "严肃、完整、合规"

**定位**：满足 App Store 审核要求，同时读起来不像"此地无银"。

**内容要求：**

1. 概述
2. 我们不收集什么（明确列出）
3. VPN 配置说明（本地存储，无服务端）
4. 下载功能说明（yt-dlp 本地运行）
5. 内嵌第三方组件清单（yt-dlp / FFmpeg / Python / sing-box）
6. 网络使用说明（仅 VPN 隧道 + 用户指定的下载）
7. 儿童隐私
8. 政策更新说明
9. 联系方式

**格式**：标准隐私政策排版，条款编号，严肃但可读。

### 2.3 支持页面 (support.html) —— "FAQ + 联系方式"

**内容：**

1. 联系邮箱（可复制）
2. FAQ（可折叠展开）：
   - 如何配置 VPN？
   - 支持哪些视频网站？
   - 文件保存在哪里？
   - 如何批量操作？
   - VPN 会记录日志吗？
3. App 基本信息（版本、系统要求、兼容设备）

---

## 3. 设计规格

### 3.1 品牌

| 项 | 值 |
|------|------|
| 主色 | `#2563eb`（蓝） |
| 辅色 | `#1e3a5f`（深蓝） |
| 背景 | `#ffffff` / `#f5f5f7`（交替） |
| 文字 | `#1d1d1f`（标题）/ `#555`（正文） |
| 字体 | `-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Segoe UI'` |
| 圆角 | 12-16px（卡片）/ 全圆角（按钮） |
| 阴影 | 轻微投影，hover 加深 |

### 3.2 响应式策略

| 断点 | 宽度 | 布局变化 |
|------|------|----------|
| 桌面 | ≥861px | 全部展开，两栏 hero，3 列 features |
| 平板 | 521-860px | 单栏 hero，2 列 features，导航简化 |
| 手机 | ≤520px | 单栏全部，1 列 features，汉堡菜单 |

### 3.3 动效

- 滚动进入视口时的淡入上移动画（Intersection Observer）
- 卡片 hover 微上浮 + 阴影加深
- 导航滚动后毛玻璃效果
- 不做太花哨的，保持克制

---

## 4. 待确认事项

| # | 问题 | 选项 | 决定 |
|---|------|------|------|
| 1 | 域名用 GitHub 二级域名还是有自定义域名？ | `forrestdum.github.io/vpnrhd-support` / 自定义 | 待定 |
| 2 | App 图标文件有没有？需要放到网站上 | 有 / 没有，需要设计 | 待定 |
| 3 | App Store 链接现在有吗？ | 还没上架，先用占位符 | 占位 |
| 4 | 截图准备好了吗？需要几组？ | 需要拍 / 已有 | 待定 |
| 5 | 联系邮箱用哪个？ | 631601108@qq.com / 其他 | 暂用 QQ |
| 6 | 隐私政策里 App 名称写 VPN-RHD 还是全称？ | VPN-RHD | 待定 |
| 7 | 语言：纯英文还是双语？ | 面向美区建议纯英文 | 待定 |

---

## 5. 开发计划

| 阶段 | 内容 | 预计 |
|------|------|------|
| P0 | CSS 框架（reset + common）+ 导航/footer JS | 先做 |
| P1 | 主页（hero + features + steps + CTA） | 先做 |
| P2 | 隐私政策 + 支持页面 | 先做 |
| P3 | 截图占位 → 替换真实截图 | 后补 |
| P4 | App Store 链接替换 | 后补 |
| P5 | 自定义域名绑定（如有） | 后补 |
