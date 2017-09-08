/**
 * Created by blucexie on 2017/6/30.
 */
$(function () {

    var json = {

        /*问题及选项*/
        "problems":[{"title":1,"problem":"什么东西破碎之后，即使最精密的仪器也找不到裂痕？","option":[ "璃","手","感","表","机","屏","情","幕","玻","掌","演","会"],"answer":["感情"]},
            {"title":2,"problem":"你能做，我能做，大家都做；一个人能做，两个人不能一起做。这是做什么？","option":["觉","挣","吃","睡","情","幕","梦","饭","钱","做","看","玩"],"answer":["做梦"]},
            {"title":3,"problem":"书店里买不到什么书 ？","option":["书","课","表","本","屏","情","作","遗","童","破","画","听"],"answer":["遗书"]},
            {"title":4,"problem":"最不听话的是谁?","option":["儿","孩","好","表","子","他","情","瞎","老","你","聋","女"],"answer":["聋子"]},
            {"title":5,"problem":"盲人都是怎么吃桔子的？","option":["嘴","拿","张","吃","咬","手","吞","正","瞎","出","咽","掰"],"answer":["瞎掰"]},
            {"title":6,"problem":"什么东西可以死很多次，而且一般情况下每次死的时间不超过1分钟？","option":["活","人","机","玩","木","偶","假","死","器","出","具","新"],"answer":["死机"]},
            {"title":7,"problem":"什么东西在用之前是干的，用完了以后是湿的，而且在使用的过程中还给人以沁人心脾的满足感？","option":["纸","湿","袋","玩","茶","偶","毛","新","浴","出","巾","水"],"answer":["茶袋"]},
            {"title":8,"problem":"谁是红豆的孩子？","option":["豆","红","小","绿","黄","国","毛","新","鬼","南","知","水"],"answer":["南国"]},
            {"title":9,"problem":"一个职业登山运动员什么山上不去？","option":["高","危","山","行","小","险","刀","峻","火","南","大","峰"],"answer":["刀山"]},
            {"title":10,"problem":"什么蛋不能吃？","option":["狗","生","小","蛋","下","鸡","鸭","吃","混","毒","打","峰"],"answer":["混蛋"]},
            {"title":11,"problem":"风平浪静的城市在哪里？","option":["昆","波","夏","明","安","宁","西","海","厦","毒","门","上"],"answer":["宁波"]},
            {"title":12,"problem":"海中绿洲（打一城市）？","option":["海","波","夏","南","岛","宁","西","青","厦","昆","门","明"],"answer":["青岛"]},
            {"title":13,"problem":"和尚打着一把伞，是一个什么成语？","option":["没","绪","头","无","不","天","西","法","湿","心","无","一"],"answer":["无法无天"]},
            {"title":14,"problem":"开什么车最省油？","option":["开","小","车","跑","大","夜","轿","新","旧","摩","无","托"],"answer":["开夜车"]},
            {"title":15,"problem":"考试时应注意什么？","option":["错","检","误","题","查","考","目","监","旧","师","无","老"],"answer":["监考老师"]},
            {"title":16,"problem":"浪费掉人的一生的三分之一时间的会是什么？","option":["吃","走","习","饭","觉","床","目","睡","作","行","工","学"],"answer":["床"]},
            {"title":17,"problem":"老王天天掉头发，什么办法都用了，只有一种办法使他永远不掉头发。是什么办法呢？","option":["吃","不","药","生","觉","洗","头","睡","剃","看","医","光"],"answer":["剃光"]},
            {"title":18,"problem":"连续剧西游记中，谁最历害又聪明？","option":["孙","来","剧","如","悟","音","头","空","猴","编","子","观"],"answer":["编剧"]},
            {"title":19,"problem":"妈妈把一头漂亮的长发剪短了，可是回到家里却没有人发现。为什么？","option":["人","帽","带","子","现","了","里","家","猴","编","没","发"],"answer":["家里没人"]},
            {"title":20,"problem":"满满一杯啤酒，怎样才能先喝到杯底的酒？","option":["倒","管","下","底","喝","用","来","空","立","吸","子","出"],"answer":["用吸管"]}


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


  /*  var num =0;
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
       /!* if($answer1.text()!=="" && $answer2.text()==""){
            $('.answer1').click(function () {
                $(this).text('');
            })
        }*!/
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
        $('#headline h2').html(json.problems[num].problem);

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
    });
*/

        /*-提示框*/

      /*  $('.look').click(function (){
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
        });
    */

});