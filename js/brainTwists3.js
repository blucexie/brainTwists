/**
 * Created by blucexie on 2017/6/30.
 */
$(function () {

    var json = {
        /*问题及选项*/
        "problems":[{"title":0,"problem":"中国哪个地方的东西最不便宜？","option":[ "深","北","感","南","贵","圳","非","海","州","东","京","上"],"answer":["贵州上"]},
            {"title":1,"problem":"什么英文字母最多人喜欢听呢？","option":["F","H","Q","D","G","W","X","C","Z","E","V","N"],"answer":["CDZE"]},
            {"title":2,"problem":"贝儿的妈妈从外地买回一种鱼，无论放多长时间也不会臭。为什么？","option":["海","鱼","大","死","草","鲤","作","带","活","木","石","小"],"answer":["木鱼小"]},
            {"title":3,"problem":"有什么办法能使眉毛长在眼的下面？","option":["快","生","好","割","立","吹","除","剪","修","画","去","倒"],"answer":["倒立"]},
            {"title":4,"problem":"当今社会，发财的个体户大都靠什么吃饭？","option":["手","子","钱","筷","咬","拿","着","嘴","活","出","牙","巴"],"answer":["嘴巴"]},
            {"title":5,"problem":"什么东西天气越热，它爬的越高？","option":["湿","苗","火","蜘","心","度","着","体","蛛","出","烧","温"],"answer":["温度"]},
            {"title":6,"problem":"离婚的主要起因是什么？","option":["感","婚","事","有","心","情","结","不","好","出","顺","和"],"answer":["结婚"]},
            {"title":7,"problem":"什么水永远用不完？","option":["河","水","事","有","心","海","来","不","自","泪","雨","和"],"answer":["泪水"]},
            {"title":8,"problem":"什么帽不能戴？","option":["帽","水","铁","纸","新","草","绿","不","自","螺","雨","破"],"answer":["螺帽"]},
            {"title":9,"problem":"借什么可以不还？","option":["饭","水","钱","纸","借","画","笔","不","自","光","伞","书"],"answer":["借光"]},
            {"title":10,"problem":"“东张西望”“左顾右盼”“瞻前瞻后”这几个成语用在什么时候最合适？","option":["看","路","生","偷","放","跑","过","风","自","马","行","走"],"answer":["过马路"]},
            {"title":11,"problem":"“失败为成功之母”，那成功为失败的什么？","option":["儿","义","失","词","反","成","亲","不","自","子","孙","父"],"answer":["反义词"]},
            {"title":12,"problem":"9999个无（打一成语）？","option":["一","里","失","万","失","成","亲","无","挑","子","九","选"],"answer":["万无一失"]},
            {"title":13,"problem":"阿呆从热气球上掉下来，却没有受伤，为什么？","option":["起","假","没","空","还","降","亲","飞","气","落","接","伞"],"answer":["还没起飞"]},
            {"title":14,"problem":"阿辉从来不念书。为何也能成为全校的模范生？","option":["学","生","不","校","习","降","哑","好","气","聋","是","新"],"answer":["聋哑生"]},
            {"title":15,"problem":"八点钟和九点钟有什么不一样？","option":["间","差","不","时","式","一","多","样","样","针","点","值"],"answer":["差一点"]},
            {"title":16,"problem":"伴奏。打一成语？","option":["长","乐","声","为","起","生","音","人","响","助","敲","击"],"answer":["助人为乐"]},
            {"title":17,"problem":"保洁阿姨是什么人？","option":["清","老","人","年","工","轻","洁","公","小","女","新","不"],"answer":["女人"]},
            {"title":18,"problem":"北京王府井步行街上来往最多的是什么人？","option":["商","老","人","年","工","子","男","行","小","女","孩","路"],"answer":["行人"]},
            {"title":19,"problem":"被人家放了鸽子还很高兴的是谁？","option":["自","她","我","己","的","人","他","别","鸽","女","被","放"],"answer":["鸽子"]},
            {"title":20,"problem":"比乌鸦更讨厌的是什么？","option":["怪","蛋","杀","死","伤","嘴","他","鸦","鸽","乌","害","人"],"answer":["乌鸦嘴"]},

        ]
    };



  //  var nSpan= "";

    /*随机产生*/
   /* var a = Math.random() + "";
    var rand1 = a.charAt(5);
    var quote = json.problems[rand1].problem;
    var title = json.problems[rand1].title;
    $('h2').html(quote);
    console.log(quote);
    console.log(title);*/
    var rNum ="";
    roa(json.problems);
    function roa(arr){   //arr为可能出现的元素集合
        var temp=[];    //temp存放生成的随机数组
        rNum=Math.round(Math.random()*(arr.length-1)); //生成随机数num
        temp.push(arr[rNum]);    //获取arr[num]并放入temp
      //  arr.splice(rNum,1);
        return temp;
    }

  //  console.log(json.problems);
    var num = 0;
    var n = 0;
    var html = "";
    var oList ="";
    var oSpan = "";
    var $options =  $('.options');

    go();

/*点击下一题*/


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

  /*
    var num =0;
    var list ='';
    var daan ="";
    var str ='';

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
    /*提示框*/
    /*
    $('.look').click(function (){
        $('.lookAnswer').show();
        $('.zhez').show();
    });
    $('.lookAnswer-cancel').click(function (){
        $('.lookAnswer').hide();
        $('.zhez').hide();
    });*/

   /* 分享框*/

  /*  $('.share').click(function (){
        $('.zhez').show();
        $('.shareFrame').show();
    });
    $('.share-cancel').click(function (){
        $('.shareFrame').hide();
        $('.zhez').hide();
    });*/

});