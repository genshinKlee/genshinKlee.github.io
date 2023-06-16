
// 禁用右键菜单
document.addEventListener('contextmenu', function (event) {
    event.preventDefault();
});




//=================================================================【BGM】=============================================================
// 欢迎页面淡出控制，音乐控制
var isMusicPlayed = false; // 记录音乐是否已经播放
var isWelcomed = false; //记录您是否已离开欢迎页面
var BGM = new Audio("./music/HOYO-MiX - Iridescent Summer Day 夏日虹彩.mp3"); //BGM

document.addEventListener("click", function (event) {
    if (!isWelcomed) {
        removeWelcomePageAndPlayMusic();
    }
});

function removeWelcomePageAndPlayMusic() {
    var welcomePage = document.getElementById("welcome-page");
    welcomePage.style.opacity = 0;
    setTimeout(function () {
        welcomePage.style.display = "none";
    }, 500);

    if (!isMusicPlayed && !isWelcomed) {
        playBackgroundMusic();
        isMusicPlayed = true;
        isWelcomed = true;
    }
}

function playBackgroundMusic() {
    BGM.loop = true; // 循环播放
    BGM.play(); // 播放BGM
    BGM.volume = 0.1; 
}

//音乐播放控制
var volumeControl = document.getElementById("volume-control");
var volumeIcon = document.getElementById("volume-icon");


//音乐暂停和播放逻辑
volumeControl.addEventListener("click", function () {
    if (!isMusicPlayed) {
        // Play music
        BGM.play();
        volumeIcon.style.animationPlayState = "running";
        isMusicPlayed = true;
    } else {
        // Pause music
        BGM.pause();  
        volumeIcon.style.animationPlayState = "paused";
        isMusicPlayed = false;
    }
});




// ===================================================【多语言支持】============================================


var audioList = [];  // 角色音频
let firstSquish = true; //第一次点击

//多语言支持

//语言属性数组
const LANGUAGES = {
    //默认
    "_": { fallbackLanguage: "cn" },

    //中文语音、文本、海报
    "cn": {
        audioList: [
            //0-10：默认模式 mode1
            "audio/CN_voice/BengbengBombCN.mp3",
            "audio/CN_voice/DadadaCN.mp3",
            "audio/CN_voice/HidoiCN.mp3",
            "audio/CN_voice/HaoyeCN.mp3",
            "audio/CN_voice/HeixiuCN.mp3",
            "audio/CN_voice/HenghenghengCN.mp3",
            "audio/CN_voice/LalalaCN.mp3",
            "audio/CN_voice/QiangqiangCN.mp3",
            "audio/CN_voice/ChildlabourWuuu_CN.mp3",
            "audio/CN_voice/Lueluelue_CN.mp3",
            "audio/CN_voice/Aowu_CN.mp3",
            //11-16：彩蛋模式 mode3
            "audio/General/Egg_LZKBomb_General.mp3",
            "audio/General/Egg_LZKDadada_General .mp3",
            "audio/General/Egg_LZKHei_General.mp3",
            "audio/General/Egg_HLbomb_General.mp3",
            "audio/General/Egg_HLlalala_General.mp3",
            "audio/General/Egg_HLdadada_General.mp3"
        ],
        texts: {
            "page-title": "可莉 哒哒哒~",
            "doc-title": "哒哒哒~",
            "page-descriptions": "给可莉酱写的小网站，对，就是那个<del>烦人的</del>最可爱的《原神》角色！",
            "counter-descriptions": ["可莉已经哒哒哒~了", "可莉已经哒了"],
            "counter-unit": ["次", "次哒哒哒"],
            "counter-button": ["哒哒哒~", "啦啦啦！"],
            "credits-gif": "鸣谢：Seseren_kr提供的可莉GIF图片",
            "footer-repository-text": "本网站的Github仓库在这儿：",
            "footer-repository-text-2": "可莉哒哒哒的仓库",
            "footer-repository-text3":"鸣谢：duiqt提供的本网站基础源代码",
            "footer-repository-text-4":"Herta_kuru"
        },
        cardImage: "img/card_cn.jpg"
    },

    //日文语音、文本、海报
    "ja": {
        audioList: [
            //0-10：默认模式 mode1
            "audio/JP_voice/BengbengBombJP.mp3",
            "audio/JP_voice/DadadaJP.mp3",
            "audio/JP_voice/HidoiJP.mp3",
            "audio/JP_voice/HaoyeJP.mp3",
            "audio/JP_voice/HeixiuJP.mp3",
            "audio/JP_voice/HenghenghengJP.mp3",
            "audio/JP_voice/LalalaJP.mp3",
            "audio/JP_voice/QiangqiangJP.mp3",
            "audio/JP_voice/Damie_JP.mp3",
            "audio/JP_voice/Wunia_JP.mp3",
            "audio/JP_voice/ChildlabourWuuu_JP.mp3",
            //11-16：彩蛋模式 mode3
            "audio/General/Egg_LZKBomb_General.mp3",
            "audio/General/Egg_LZKDadada_General .mp3",
            "audio/General/Egg_LZKHei_General.mp3",
            "audio/General/Egg_HLbomb_General.mp3",
            "audio/General/Egg_HLlalala_General.mp3",
            "audio/General/Egg_HLdadada_General.mp3"
        ],
        texts: {
            "page-title": "クレーだだだ～",
            "doc-title": "だだだ~",
            "page-descriptions": "このサイトはクレーのために作られた、 あの原神の <del>悩ましい</del> かわいい天才キャラー。",
            "counter-descriptions": "だだだ数",
            "counter-unit": "回",
            "counter-button": "だだだ~!",
            "credits-gif": "感謝: Seseren_kr さんが提供してくれたクレーのGIF画像",
            "footer-repository-text": "こちらはこのページGitHubリポジトリ:",
            "footer-repository-text-2": "可莉哒哒哒的仓库",
            "footer-repository-text3":"感謝：duiqt さんが提供してくれたこのウェブサイトの基礎ソースコード",
            "footer-repository-text-4":"Herta_kuru"
        },
        cardImage: "img/card_jp.jpg"
    },


    //英文语音、文本、海报
    "en": {
        audioList: [
            //0-10：默认模式 mode1
            "audio/JP_voice/BengbengBombJP.mp3",
            "audio/JP_voice/DadadaJP.mp3",
            "audio/JP_voice/HidoiJP.mp3",
            "audio/JP_voice/HaoyeJP.mp3",
            "audio/JP_voice/HeixiuJP.mp3",
            "audio/JP_voice/HenghenghengJP.mp3",
            "audio/JP_voice/LalalaJP.mp3",
            "audio/JP_voice/QiangqiangJP.mp3",
            "audio/JP_voice/Damie_JP.mp3",
            "audio/JP_voice/Wunia_JP.mp3",
            "audio/JP_voice/ChildlabourWuuu_JP.mp3",
            //8-13：彩蛋模式 mode3
            "audio/General/Egg_LZKBomb_General.mp3",
            "audio/General/Egg_LZKDadada_General .mp3",
            "audio/General/Egg_LZKHei_General.mp3",
            "audio/General/Egg_HLbomb_General.mp3",
            "audio/General/Egg_HLlalala_General.mp3",
            "audio/General/Egg_HLdadada_General.mp3"
        ],
        texts: {
            "page-title": "Welcome to Klee dadada~ &nbsp;",
            "doc-title": "Dadada~",
            "page-descriptions": "The website for Klee, the <del>annoying</del> cutest genius Genshin Impact character out there.",
            "counter-descriptions": ["The Dadada~ has been squished for", "Klee has been Dadada~ed for"],
            "counter-unit": "times",
            "counter-button": ["Squish the Dadada~!", "Da Da~!"],
            "credits-gif": "Acknowledgment: GIF images of Klee provided by Seseren_kr.",
            "footer-repository-text": "You can check out the GitHub repository here:",
            "footer-repository-text-2": "可莉哒哒哒的仓库",
            "footer-repository-text3":"Special thanks to duiqt for providing the source code for this website.",
            "footer-repository-text-4":"Herta_kuru"
        },
        cardImage: "img/card_en.jpg"
    }
};

//设置语言选择器的文本语言
function refreshLanguageSelector(selectedLanguage){
    switch (selectedLanguage) {
        case "cn":
            document.getElementById("lan1").innerHTML = "🌏中文";
            document.getElementById("lan2").innerHTML = "英文";
            document.getElementById("lan3").innerHTML = "日文";
            break;
        case "ja":
            document.getElementById("lan1").innerHTML = "中国語";
            document.getElementById("lan2").innerHTML = "🌏日本語";
            document.getElementById("lan3").innerHTML = "英語";
            break;
        case "en":
            document.getElementById("lan1").innerHTML = "Chinese";
            document.getElementById("lan2").innerHTML = "Japanese";
            document.getElementById("lan3").innerHTML = "🌏English";
            break;
        default:
            break;
    }
}

//设置模式选择器的文本语言
function refreshModeSelector(selectedLanguage){
    switch (selectedLanguage) {
        case "cn":
            document.getElementById("mode1").innerHTML = "默认模式";
            document.getElementById("mode2").innerHTML = "只要哒哒哒";
            document.getElementById("mode3").innerHTML = "隐藏彩蛋";
            break;
        case "ja":
            document.getElementById("mode1").innerHTML = "デフォルトモード";
            document.getElementById("mode2").innerHTML = "ダダダだけ";
            document.getElementById("mode3").innerHTML = "ひみつ";
            break;
        case "en":
            document.getElementById("mode1").innerHTML = "DefaultMode";
            document.getElementById("mode2").innerHTML = "Just Dadada";
            document.getElementById("mode3").innerHTML = "Easter egg";
            break;
        default:
            break;
    }
}


//获取默认语言并赋值给语言选择框
var current_language = localStorage.getItem("lang") || "cn";
if (current_language != "cn") {
    document.getElementById("language-selector").value = current_language;
};

//通过获取当前语言和对应的文本数组，遍历文本数组中的每个键值对。如果文本值是一个数组，就从数组中随机选择一个元素作为新的文本内容，并将其更新到对应的 HTML 元素中
function randomChoice(myArr) {
    const randomIndex = Math.floor(Math.random() * myArr.length);
    const randomItem = myArr[randomIndex];
    return randomItem;
};

//核心函数！动态刷新动态文本内容（将新的DOM值渲染到前端）
function refreshDynamicTexts() {
    let curLang = LANGUAGES[current_language];
    let localTexts = curLang.texts;
    Object.entries(localTexts).forEach(([textId, value]) => {
        if (value instanceof Array)
            if (document.getElementById(textId) != undefined)
                document.getElementById(textId).innerHTML = randomChoice(value);
    });
};

//定义函数：根据当前语言，渲染页面
function multiLangMutation() {
    let curLang = LANGUAGES[current_language]; //获取当前的网站语言
    let localTexts = curLang.texts;  //获取当前语言的文本数组
    Object.entries(localTexts).forEach(([textId, value]) => { //将各个DOM元素的值变为文本值
        if (!(value instanceof Array))
            if (document.getElementById(textId) != undefined)
                document.getElementById(textId).innerHTML = value;
    });
    refreshDynamicTexts() //刷新动态文本内容（将新的DOM值渲染到前端）
    document.getElementById("klee-card").src = curLang.cardImage; //动态获取klee-card在当前语言文本环境下的Dom元素并更新
    
    var selectedLanguage = document.getElementById("language-selector").value;
    refreshLanguageSelector(selectedLanguage) //更新语言选择器的文本语言
    refreshModeSelector(selectedLanguage) //更新模式选择器的文本语言
};
/*
curLang 变量获取了当前选择的网站语言对应的语言对象（假设为 LANGUAGES 全局对象中的一个属性）。
localTexts 变量获取了当前语言对象中的文本数组。
使用 Object.entries() 方法遍历 localTexts 中的键值对。
对于每一个键值对，解构赋值为 [textId, value]，其中 textId 是 DOM 元素的 ID，value 是对应的文本值。
首先检查 value 是否为数组，如果不是数组，表示是单个文本值（例如字符串）。
检查当前网页是否存在具有对应 textId 的 DOM 元素（通过 document.getElementById(textId) 来判断）。
如果存在对应的 DOM 元素，则将其内部的 HTML 内容更新为 value。
这样就实现了根据当前语言选择动态更新网页中的文本内容。
*/


multiLangMutation() //初始化网站语言

//通过这段代码，当语言选择器的值发生变化时，会根据选择的语言重新渲染页面的文本内容和动态图片，实现动态调整网站语言的功能。
document.getElementById("language-selector").addEventListener("change", (ev) => {
    current_language = ev.target.value;
    localStorage.setItem("lang", ev.target.value);
    multiLangMutation();
});





//=======================================================================【按钮点击、计数器】============================================

// 初始化计数器
//本地计数器
const localCounter = document.querySelector('#local-counter'); //获取展示本地点击数的DOM元素
let localCount = localStorage.getItem('count-local') || 0; //获取本地点击数的值
localCounter.textContent = localCount.toLocaleString('en-US'); //使用美式英语的格式进行格式化。这样可以确保数值以适当的方式显示，例如添加千位分隔符



let prevTime = 0;

//获取时间戳
const getTimestamp = () => Date.parse(new Date());

//点击哒哒哒的按钮事件
const counterButton = document.querySelector('#counter-button');
counterButton.addEventListener('click', (e) => {
    prevTime = getTimestamp(); //当前时间
    localCount++; 
    localStorage.setItem('count-local',localCount); //缓存localCount到本地

    localCounter.textContent = localCount.toLocaleString('en-US');

    triggerRipple(e); //按钮的水波纹效果
    playDadada(); //播放可莉语音
    animateKlee(); //播放可莉动画
});




//===================================================================【资源缓存】========================================================
var cachedObjects = {};
function tryCachedObject(origUrl) {
    // 检查对象是否已经被缓存
    if (cachedObjects[origUrl]) {
        return cachedObjects[origUrl];
    } else {
        // 开始缓存
        fetch(origUrl)
            .then((response) => response.blob())
            .then((blob) => {
                // 为对象创建一个blob URL
                const blobUrl = URL.createObjectURL(blob);
                // 通过在cachedObjects对象中存储blob URL来获取缓存的对象
                cachedObjects[origUrl] = blobUrl;
            })
            .catch((error) => {
                console.error(`Error caching object from ${origUrl}: ${error}`);
            });
        return origUrl;
    }
};


// //缓存所有资源
// function cacheAllResources() {
//     // 缓存图片资源
//     for (let i = 1; i <= 6; i++) {
//       const imageUrl = `img/animation/${i}.gif`;
//       tryCachedObject(imageUrl);
//     }
  
//     // 缓存中文音频资源（含通用语音资源）
//     const cnAudioList = LANGUAGES.cn.audioList;
//     cnAudioList.forEach((audioUrl) => {
//       tryCachedObject(audioUrl);
//     });
  
//     // 缓存日文音频资源（含通用语音资源）
//     const jaAudioList = LANGUAGES.ja.audioList;
//     jaAudioList.forEach((audioUrl) => {
//       tryCachedObject(audioUrl);
//     });

//     //只需要执行一次该功能
//     firstLoadClick = false;
//   }

//   // 当页面加载完成后触发缓存资源
//   var firstLoadClick = true;
//   window.addEventListener('click', cacheAllResources);
  
  





//========================================================================【按钮点击后的动画、音频】================================================

//返回当前语言的音频数组
function getLocalAudioList() {
    return LANGUAGES[current_language].audioList;
};
//从音频数组中获取一个随机的音频URL（传入一个当前模式。curMode==mode1   默认模式，cueMode==mode3）
function getRandomAudioUrl(curMode) {
    var localAudioList = getLocalAudioList()

    //根据模式产生符合模式的音频下标
    if(curMode == "mode1"){
        randomIndex = Math.floor(Math.random() * 11) ; //默认语音的文件是：文件下标0-10.这儿的数字就写8.
    }
    if(curMode == "mode3"){
        randomIndex = Math.floor(Math.random() * 17) ; //文件下标0-16.这儿的数字就写14. 【这儿写彩蛋对应的audioList下标】
    }

    const randomItem = localAudioList[randomIndex];
    return randomItem;

};

//播放音频
var isFirstVoice = true;
function playDadada() {

    //先获取当前的模式：1-默认；2-只哒哒哒；3-彩蛋
    const modeSelectElement = document.getElementById("mode-selector");
    const modeSelectedOption = modeSelectElement.options[modeSelectElement.selectedIndex];
    const curMode = modeSelectedOption.id;

    //要播放的音频Url
    let audioUrl;

    //根据当前模式获取符合模式语音的 AudioURL
    switch(curMode){
        //curMode==mode1   默认模式
        case "mode1":{
            if(isFirstVoice == true){//随机获取一个音频的URL，第一个必定是哒哒哒
                isFirstVoice = false;
                audioUrl = getLocalAudioList()[1] //First play fixed Dadada
            }else{
                audioUrl = getRandomAudioUrl(curMode);
            }
        };break;

        //curMode==mode2   只哒哒哒
        case "mode2":{
            audioUrl = getLocalAudioList()[1]
        };break;

        //cueMode==mode3   彩蛋
        case "mode3":{
            if(isFirstVoice == true){//随机获取一个音频的URL，第一个必定是哒哒哒
                isFirstVoice = false;
                audioUrl = getLocalAudioList()[1] //First play fixed Dadada
            }else{
                audioUrl = getRandomAudioUrl(curMode);
            }
        };break;
    }
    

    //根据音频URL从本地获取音频资源。同时将该音频缓存到本地
    let audio = new Audio(tryCachedObject(audioUrl)); //【缓存貌似可以删除】

    //播放音频后监听音频结束事件，并在音频播放结束时将音频元素从 DOM 中移除
    audio.play();
    audio.addEventListener("ended", function () {
        this.remove();
    });
};

//可莉的动画
function animateKlee() {
    let id = null;

    const random = Math.floor(Math.random() * 5) +1; //1-6，可莉的GIF
    const elem = document.createElement("img");
    elem.src = tryCachedObject(`img/animation/${random}.gif`);

    //下面根据不同的窗口改变可莉动画的样式（响应式）
    const screenWidth = window.innerWidth;

    if(screenWidth > 768){
        elem.style.position = "absolute";
        elem.style.right = "-500px";
        elem.style.top = counterButton.getClientRects()[0].bottom + scrollY - 430 + "px"
        elem.style.zIndex = "-10";
        document.body.appendChild(elem);

        let pos = -500;
        const limit = window.innerWidth + 500;
        clearInterval(id);
        id = setInterval(() => {
            if (pos >= limit) {
                clearInterval(id);
                elem.remove()
            } else {
                pos += 20;
                elem.style.right = pos + 'px';
            }
        }, 12);
    }else{
        //移动端，把动画变小、变慢一点
        elem.style.position = "absolute";
        elem.style.right = "-500px";
        elem.style.top = counterButton.getClientRects()[0].bottom + scrollY - 180 + "px"
        elem.style.zIndex = "-10";
        elem.style.width = "250px"; // 设置宽度为 200px（让移动端方便观看）
        elem.style.height = "auto"; // 自动计算高度，保持纵横比
        document.body.appendChild(elem);

        let pos = -500;
        const limit = window.innerWidth + 500;
        clearInterval(id);
        id = setInterval(() => {
            if (pos >= limit) {
                clearInterval(id);
                elem.remove()
            } else {
                pos += 10;
                elem.style.right = pos + 'px';
            }
        }, 12);
    }
    
};

//点击 counter-button 元素时，会在点击位置出现一个水波纹效果。
function triggerRipple(e) {
    let ripple = document.createElement("span");

    ripple.classList.add("ripple");

    const counter_button = document.getElementById("counter-button");
    counter_button.appendChild(ripple);

    let x = e.clientX - e.target.offsetLeft;
    let y = e.clientY - e.target.offsetTop;

    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;

    setTimeout(() => {
        ripple.remove();
    }, 300);
};





//================================================================【日志功能】==================================================
const changelogButton = document.getElementById('changelog-button'); //日志功能点击按钮
const changelogModal = document.getElementById('changelog-modal'); //

changelogButton.addEventListener('click', toggleChangelogModal);

function toggleChangelogModal() {
    changelogModal.style.display = 'block';
    changelogModal.classList.toggle('fade-in');
    changelogModal.classList.toggle('fade-out');
}

var isFirstClick = true;
document.addEventListener('click', function (event) {
    //第一次弹窗默认弹窗，点击哪里都能关闭弹窗
    if (isFirstClick == true) {
        //移除弹窗的渐入动画、增加淡出动画
        changelogModal.classList.remove('fade-in');
        changelogModal.classList.add('fade-out');
        //淡出动画的CSS持续时间为0.5s，因此这0.5s内，弹窗的display="none"需要延迟0.5s执行
        setTimeout(function() {
            changelogModal.style.display = 'none';
        }, 500 // 0.5秒延时，和CSS代码中的 fade-out 持续时间一致
        ); 
        isFirstClick = false;
    }
    //第二次点击弹窗之后，只能点击弹窗外的地方才能关闭
    else if(!changelogModal.contains(event.target) && !changelogButton.contains(event.target)) {
        //逻辑同上
        changelogModal.classList.remove('fade-in');
        changelogModal.classList.add('fade-out');
        setTimeout(function() {
            changelogModal.style.display = 'none';
        }, 500); 
    }
});



//更新日志设置（模板字符串）
const logTitle = document.getElementById("logtitle");
const logText = document.getElementById("logtext");
const title = "6.16 V1.1网站更新日志";
const content = `
<br>
1.新增语音：<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;①中文语音：“嗷呜” 、“略略略”、“呜..”<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;②日语语音：“哒咩”、“呜nia”、“呜..”<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;③刘兆坤老师的可莉彩蛋语音<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;④花玲老师的可莉彩蛋语音<br>
2.新增功能：永久保存本地的点击数<br>
3.添加Windows客户端版本（群文件在群里～）<br>
4.新增两个语音模式选项 “仅哒哒哒”、“彩蛋”<br>
5.优化了语言选择栏的文本显示逻辑<br>
6.减小了移动端可莉图像的大小和移动速度<br>
7.新增“版本日志”功能，点击左上角就可以查看本网站的更新日志了！<br>
`;

logTitle.innerHTML = `<h2>${title}</h2>`;
logText.innerHTML = `<p>${content}</p>`;


