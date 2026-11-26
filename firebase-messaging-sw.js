// 불림 폰 알림 서비스 워커 (Firebase Cloud Messaging)
// 알림이 오면 Firebase가 화면에 띄우고, 누르면 알림에 담긴 주소(불림 앱)로 열어요.
// firebaseConfig는 앱이 이 파일을 등록할 때 주소 뒤 ?cfg= 로 넘겨줘요 (시트 설정 탭 J23).
importScripts("https://www.gstatic.com/firebasejs/10.14.1/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.14.1/firebase-messaging-compat.js");
var cfg = {};
try { cfg = JSON.parse(new URL(self.location.href).searchParams.get("cfg") || "{}"); } catch (e) {}
if (cfg.apiKey) { firebase.initializeApp(cfg); firebase.messaging(); }
self.addEventListener("install", function () { self.skipWaiting(); });
self.addEventListener("activate", function (e) { e.waitUntil(self.clients.claim()); });
