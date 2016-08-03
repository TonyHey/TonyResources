// var finishTime = new Date(2018, 05 , 07, 08, 00, 00);
// setInterval(function() {
// 	var startTime = new Date();
// 	var remainning = (finishTime.getTime() - startTime.getTime())/1000;
// 	var day = Math.floor(remainning / 86400);
// 	remainning = remainning % 86400;
// 	var hour = Math.floor(remainning / 3600);
//     remainning = remainning % 3600;
//     var minute = Math.floor(remainning / 60)
//     var secound = Math.floor(remainning % 60);
//     secound = secound < 10 ? "0" + secound : secound;
// 	// console.log("距离2018年高考还有："+ day + "天" + hour + "小时" + minute + "分" + secound + "秒");
// },1000);


//男神觉得时机成熟了，手捧99朵披着月季的玫瑰向女神求婚：
// “女神，嫁给我吧！我发誓，我会对你一辈子好的！”
// “这个嘛，你先去问问我爸爸，我大伯以及我大姑的意思，他们全部都认可你，我再考虑考虑！对了，如果我爸没有答复，大伯他们肯定是不会同意的；如果大伯没有答复，大姑也是不会同意的。”
// 如果你是男神，你会怎么做？

// 传统JS实现
console.log("传统JS实现\n----------------");
var NanShen = {
    "身高": 180,
    "体重": 80,
    "年薪": "2000K",
    request: function(obj) {
        // 成功与否随机决定
        // 执行成功的概率为80%
        if (Math.random() > 0.2) {
            obj.success();
        } else {
            obj.error();
        }
    }
};

var Request = function(names, success) {
    var index = 0, first = 0;
    var request = function() {
        if (names[index]) {
            NanShen.request({
                name: names[index],
                success: function() {
                    first = 0;
                    console.log("成功拿下" + names[index]);
                    index++;
                    request();
                },
                error: function() {
                    if (first == 1) {
                        console.log("依旧没能拿下" + names[index] + "，求婚失败");
                        return;
                    } else {
                        console.log("没能拿下" + names[index] + "，再试一次");
                    }
                    first = 1;
                    request();
                }
            });
        } else {
            success();
        }
    };

    request();
};

Request(["岳父", "大伯", "大姑"], function() {
    NanShen.request({
        name: "女神",
        success: function() {
            console.log("女神同意，求婚成功！");
        },
        error: function() {
            console.log("女神不同意，求婚失败！");
        }
    });
});


//ES6 promise 实现
console.log("\nES6 promise实现\n----------------");
var NanShen = {
    "身高": 180,
    "体重": 80,
    "年薪": "200K",
    request: function(obj) {
        // 成功与否随机决定
        // 执行成功的概率为80%
        if (Math.random() > 0.2) {
            obj.success();
        } else {
            obj.error();
        }
    }
};

var Request = function(name) {
    return new Promise(function(resolve, reject) {
        var failed = 0, request = function() {            
            NanShen.request({
                name: name,
                success: function() {
                    console.log(name + "攻略成功！");
                    failed = 0;
                    resolve();
                },
                error: function() {
                    if (failed == 0) {
                        console.log("第一次攻略" + name + "失败，重试一次！");
                        failed = 1;
                        // 重新攻略一次
                        request();                       
                    } else {
                        console.log("依然没有拿下" + name + "，求婚失败！");
                        reject();
                    }
                }
            });
        };
		
        request();
    });
};

Request("岳父")                                // 搞定岳父，然后...
.then(function() { return Request("大伯"); })  // 搞定大伯，然后...
.then(function() { return Request("大姑"); })  // 搞定大姑，然后...
.then(function() {                            // 长辈们全部KO后，攻略女神
    NanShen.request({
        name: "女神",
        success: function() {
            console.log("女神同意，求婚成功！");
        },
        error: function() {
            console.log("女神不同意，求婚失败！");
        }
    });
});