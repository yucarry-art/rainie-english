V6.0 Audio Alpha Mobile Fix

修复：
1. 手机底部导航从4列大网格改为横向滑动条。
2. 底部导航高度从最多180px降到约74px。
3. 页面底部增加留白，避免“完成今天，进入下一天”按钮被遮挡。
4. 支持 iPhone safe-area 底部安全区。

部署：
上传覆盖全部文件，特别是 index.html / manifest.json / service-worker.js / audio 文件夹。
部署后手机删除旧桌面图标并重新添加，或清理 Safari 网站数据。
