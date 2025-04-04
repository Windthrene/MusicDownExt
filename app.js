//修改网页
function edithtml() {
const musicURL = window.location.href;
const musicID = musicURL.split("play_detail/")[1];
const playElement = document.querySelector('.play.bg_primary');
playElement.classList.remove('play');
const btnsElement = document.querySelector('.btns');
btnsElement.insertAdjacentHTML(
	'beforebegin',
	'<style>.pre{align-items:center;border:none;border-radius:22px;display:flex;font-size:16px;margin-right:10px;padding:0 28px;text-align:center;cursor:pointer;height:40px;}</style><div style="margin-top:32px;display:flex;"><button class="play bg_primary pre" onclick="location.href=`https://api.limeasy.cn/kwmpro/preview.php?id='+musicID+'&quality=standard`">免费下载</button><button class="play bg_primary pre" onclick="location.href=`https://api.limeasy.cn/kwmpro/preview.php?id='+musicID+'&quality=exhigh`">HQ免费下载</button><button class="play bg_primary pre" onclick="location.href=`https://api.limeasy.cn/kwmpro/preview.php?id='+musicID+'&quality=lossless`">SQ免费下载</button></div><br><a>下载的文件仅供交流学习使用，禁止用于任何商业用途，请在24小时内删除下载的文件。</a>'
);
};
edithtml();
//URL改变监听回调
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
	if (request.action === "urlUpdate") {
		edithtml();
	}
});
//前进后退键监听
window.addEventListener('popstate', () => {
  location.reload(true);
});