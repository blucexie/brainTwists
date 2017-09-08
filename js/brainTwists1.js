/**
 * Created by blucexie on 2017/6/30.
 */
$(function () {

    var json = {

        /*问题及选项*/
        "problems":[{"title":1,"problem":"什么东西晚上才会长出尾巴？","option":[ "兔","手","狐","人","流","妖","活","幕","星","牙","杯","猩"],"answer":["流星"]},
            {"title":2,"problem":"什么冰没水？","option":["冰","水","冻","雪","炒","吃","河","放","冷","干","看","画"],"answer":["干冰"]},
            {"title":3,"problem":"什么地方只要一个人就客满？","option":["房","宾","桶","馆","院","马","水","客","童","影","室","池"],"answer":["马桶"]},
            {"title":4,"problem":"哪种竹子不长在土里？","option":["山","水","木","竹","石","他","画","脆","爆","土","吃","深"],"answer":["爆竹"]},
            {"title":5,"problem":"拥有很多牙齿,能咬住人的头发的东西是什么？","option":["头","夹","绳","绑","架","手","带","正","花","子","辫","发"],"answer":["发夹"]},
            {"title":6,"problem":"哪项比赛是往后跑的？","option":["跑","河","绳","步","箭","走","竞","拔","长","射","击","投"],"answer":["拔河"]},
            {"title":7,"problem":"小孩子睡觉前为什么要妈妈说故事？","option":["爱","催","好","喜","累","欢","听","快","速","眠","奇","怪"],"answer":["催眠"]},
            {"title":7,"problem":"什么东西放在火中不会燃，放在水中不会沉？","option":["石","棉","头","花","天","气","冰","水","木","块","碳","火"],"answer":["冰块"]},
            {"title":8,"problem":"哪一种动物，虽说是金，却不是真，大眼孩儿，爱穿长裙？","option":["鱼","鹿","马","水","熊","蛇","猫","水","骑","枪","怪","金"],"answer":["金鱼"]},
            {"title":9,"problem":"小毕是学校出了名的逃课王，几乎有课必逃，但是有一节课，他却不敢逃，永远准时不缺课，请问是哪一课？","option":["语","课","文","学","体","化","数","育","下","乐","音","上"],"answer":["下课"]},
            {"title":10,"problem":"既认识自然又能随便改造自然的人是谁？","option":["考","家","古","地","深","理","画","人","学","质","超","强"],"answer":["画家"]},
            {"title":11,"problem":"病患在什么地方最没痛苦？","option":["手","上","头","脚","身","外","心","人","里","眼","别","睛"],"answer":["别人身上"]},
            {"title":12,"problem":"不相信恋人。猜一公安用语？","option":["武","上","对","人","法","非","疑","警","里","象","怀","身"],"answer":["怀疑对象"]},
            {"title":13,"problem":"步兵用走的，什么兵却随时要用跑的？","option":["骑","工","对","兵","炮","大","装","逃","甲","陆","空","程"],"answer":["逃兵"]},
            {"title":14,"problem":"猜猜什么东西，可以洗，不能晒，可以吃，不能吞？","option":["肉","果","鸡","虾","药","麻","水","土","冰","将","花","红"],"answer":["麻将"]},
            {"title":15,"problem":"超市里面最值钱的东西是什么？","option":["机","果","手","数","码","冰","水","箱","电","银","视","收"],"answer":["收银机"]},
            {"title":16,"problem":"从前，遍地是金的山是什么山？","option":["火","山","活","昆","旧","仑","峰","天","金","终","南","下"],"answer":["旧金山"]},
            {"title":17,"problem":"从小精心培养，长大绳捆索绑，临老千刀万剁，最后把它火葬，是什么东西？","option":["孩","人","动","子","草","树","苗","天","烟","庄","稼","地"],"answer":["烟草"]},
            {"title":19,"problem":"第九次结婚，打一城市名字？","option":["伦","黎","敦","加","湾","上","巴","坡","烟","台","新","台"],"answer":["巴黎"]},
            {"title":20,"problem":"丁丁拿着块石头向玻璃砸去，玻璃却没碎。为什么？","option":["太","化","硬","钢","砸","上","没","坡","结","到","新","实"],"answer":["没砸到"]}
        ]


    };

    var rNum ="";
    roa(json.problems);
    function roa(arr){   //arr为可能出现的元素集合
        var temp=[];    //temp存放生成的随机数组
        rNum=Math.round(Math.random()*(arr.length-1)); //生成随机数num
        temp.push(arr[rNum]);    //获取arr[num]并放入temp
        //  arr.splice(rNum,1);
        return temp;
    }

   // console.log(json.problems);
    var num = 0;
    var n = 0;
    var html = "";
    var oList ="";
    var oSpan = "";
    var $options =  $('.options');
    go();


    $('.nextQ').click(function () {
        json.problems.splice(rNum,1);
        roa(json.problems);
        if(json.problems.length===0){
            alert("已经是最后一题了");
            return false;
        }

        $('.answerL p span').remove();
        $('.options span').remove();
        $('.right').hide();
        $('.rightTick').hide();
        $options.show();
        oList ="";
        num=0;
        oSpan = "";
        html="";
        daan = "";
        n++;
        if(n==json.problems.length){
            n=0;
        }
        go();

    });
    function go() {
        $('h2').html(json.problems[rNum].problem);
        /*初始化第一题和答案框*/
        for(var i = 0;i<12;i++){
            oList+= "<span>"+json.problems[rNum].option[i]+"</span>";
        }
        $options.append(oList);

        var answerLen = json.problems[rNum].answer.join("").length;
        for(var i =0;i<answerLen;i++){
            oSpan+= "<span class='answer"+i+"'></span>"
        }
        $(".answerL p label").after(oSpan);
        /*初始化第一题答案,添加class到P上*/
        daan = json.problems[rNum].answer[0];
        $('.answerL p').attr('class',daan);

        var $xSpan =  $('.options span');
        $xSpan .click(function () {
            num++;
            var oAnswer = this.innerHTML;
            var oDaan = $(".answerL p span");
            var lens = oDaan.length;
            var oD = $(".answerL p span:nth-of-type("+num+")");
            if(oD.html()==""){
                oD.html(oAnswer);
            }
            html+=oAnswer;
            if(html===daan){
                setTimeout(function () {
                    $('.rightTick').show();
                    $('.options').slideUp();
                    $('.right').slideDown();
                },500);

            }else if(oD.html()!=="" && html!==daan && html.length ==lens ){
                setTimeout(function () {
                    $('.errorTick').show();
                    setTimeout(function () {
                        $(".answerL p span").html("");
                        $('.errorTick').hide();
                    },500)
                },500);
                num=0;
                html="";
            }
        });
    }
    /* var num =0;
     var list ='';
     var daan ="";
     for(var i=0;i<12;i++){
         list +="<span>"+json.problems[0]["option"][i]+"</span>";
     }
     $('.options').append(list);

     daan = json.problems[0].answer[0];

     $('.answerL p').attr('class',daan);

     var $answer1 = $('.answer1');
     var $answer2 = $('.answer2');

     var answer ="";
     $('.options span').click(function () {
         var word=  $(this).text();
         if($answer1.text()==""){
             $answer1.text(word);
         }else if($answer1.text()!=="" && $answer2.text()==""){
             $answer2.text(word);
             answer = $answer1.text()+$answer2.text();
         }
         if(answer == daan){
             setTimeout(function () {
                 $('.rightTick').show();
                 $('.options').slideUp();
                 $('.right').slideDown();
             },500)
         }else if($answer1.text()!=="" && $answer2.text()!=="" ){
             setTimeout(function () {
                 $('.errorTick').show();
                 setTimeout(function () {
                     $answer1.text("");
                     $answer2.text("");
                     $('.errorTick').hide();
                 },500)
             },500)
         }

     });


     $('.nextQ').click(function () {
         $('.options span').html("");
         num++;
         if(num==json.problems.length){
             num=0;
         }
         $('.right').hide();
         $('.rightTick').hide();
         $answer1.text("");
         $answer2.text("");
         $('.options').show();
         $('#main h2').html(json.problems[num].problem);

         daan = json.problems[num].answer[0];
         $('.answerL p').attr('class',daan);
         var list ='';
         for(var i=0;i<12;i++){
             list +="<span>"+json.problems[num]["option"][i]+"</span>";
         }
         $('.options').html(list);

         $('.options span').click(function () {
             var word=  $(this).text();
             if($answer1.text()==""){
                 $answer1.text(word);
             }else if($answer1.text()!=="" && $answer2.text()==""){
                 $answer2.text(word);
                 answer = $answer1.text()+$answer2.text();
             }
             if(answer == daan){
                 setTimeout(function () {
                     $('.rightTick').show();
                     $('.options').slideUp();
                     $('.right').slideDown();
                 },500)
             }else if($answer1.text()!=="" && $answer2.text()!=="" ){
                 setTimeout(function () {
                     $('.errorTick').show();
                     setTimeout(function () {
                         $answer1.text("");
                         $answer2.text("");
                         $('.errorTick').hide();
                     },500)
                 },500)
             }

         });
     });*/


        /*-提示框*/

       /* $('.look').click(function (){
            $('.lookAnswer').show();
            $('.zhez').show();
        });
        $('.lookAnswer-cancel').click(function (){
            $('.lookAnswer').hide();
            $('.zhez').hide();
        });*/

        /*分享框*/
    /*
        $('.share').click(function (){
            $('.zhez').show();
            $('.shareFrame').show();
        });
        $('.share-cancel').click(function (){
            $('.shareFrame').hide();
            $('.zhez').hide();
        });*/
    

});