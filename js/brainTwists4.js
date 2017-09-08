/**
 * Created by blucexie on 2017/6/30.
 */
$(function () {

    var json = {
        /*问题及选项*/
        "problems":[{"title":1,"problem":"中国哪个地方的东西最不便宜？","option":[ "深","北","感","南","贵","圳","非","海","州","东","京","上"],"answer":["贵州上"]},
            {"title":2,"problem":"什么英文字母最多人喜欢听呢？","option":["F","H","Q","D","G","W","X","C","Z","E","V","N"],"answer":["CDZE"]},
            {"title":3,"problem":"贝儿的妈妈从外地买回一种鱼，无论放多长时间也不会臭。为什么？","option":["海","鱼","大","死","草","鲤","作","带","活","木","石","小"],"answer":["木鱼小"]},
            {"title":4,"problem":"有什么办法能使眉毛长在眼的下面？","option":["快","生","好","割","立","吹","除","剪","修","画","去","倒"],"answer":["倒立"]},
            {"title":5,"problem":"当今社会，发财的个体户大都靠什么吃饭？","option":["手","子","钱","筷","咬","拿","着","嘴","活","出","牙","巴"],"answer":["嘴巴"]},
            {"title":6,"problem":"什么东西天气越热，它爬的越高？","option":["湿","苗","火","蜘","心","度","着","体","蛛","出","烧","温"],"answer":["温度"]},
            {"title":7,"problem":"离婚的主要起因是什么？","option":["感","婚","事","有","心","情","结","不","好","出","顺","和"],"answer":["结婚"]},
            {"title":8,"problem":"什么水永远用不完？","option":["河","水","事","有","心","海","来","不","自","泪","雨","和"],"answer":["泪水"]},
            {"title":9,"problem":"什么帽不能戴？","option":["帽","水","铁","纸","新","草","绿","不","自","螺","雨","破"],"answer":["螺帽"]},
            {"title":10,"problem":"借什么可以不还？","option":["饭","水","钱","纸","借","画","笔","不","自","光","伞","书"],"answer":["借光"]}

        ]
    };
    var ind = 0;
    var spans = '';
    var inddaan = 0;
    var spandaan = '';
    var daanrongqi = '';
    gongneng();
    $('.nextQ').click(function () {
        $('.options span').remove();
        $('.answerL>p>span').remove();
        $('.rightTick').hide();
        $('.options').show();
        $('.right').hide();
         spans = '';
         inddaan = 0;
         spandaan = '';
         daanrongqi = '';
        ind++;
        gongneng()
    });
    // console.log(json.problems[0])
   function gongneng() {
        $('#headline h2').html(json.problems[ind].problem);
       json.problems[ind].option.forEach(i =>{
           spans+= `<span>${i}</span>`
       });
       $('.options').append(spans);

       for(let a = 0;a<json.problems[ind].answer.join('').length;a++){
           spandaan+= `<span></span>`
       }
       $('.answerL p').append(spandaan);

       $('.options span').click(function () {
           daanrongqi +=this.innerHTML;
           $($('.answerL p>span')[inddaan]).html(this.innerHTML);
           inddaan++;
           if(inddaan ===json.problems[ind].answer.join('').length){
               if(daanrongqi === json.problems[ind].answer.join('')){
                   $('.rightTick').show();
                   $('.options').slideUp();
                   $('.right').slideDown();
               }else {
                   setTimeout(function () {
                       $('.errorTick').show();
                       setTimeout(function () {
                           $('.answerL p>span').html('');
                           $('.errorTick').hide();
                           inddaan = 0;
                           daanrongqi = '';
                       },500)
                   },500)
               }
           }
       })
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
/!*--------------------------------*!/




    /!*添加答案框span*!/
/!*
    for(var i = 0;i<json.problems.length;i++){
        var len = json.problems[i].answer.join("").length;

        for(var j =0;j<len+1;j++){
            str+="<span></span>";


        }
        $('.answerL p').append(str);
    }
*!/





/!*--------------------------------------*!/
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


        /!*-提示框*!/
        $('.look').click(function (){
            $('.lookAnswer').show();
            $('.zhez').show();
        });
        $('.lookAnswer-cancel').click(function (){
            $('.lookAnswer').hide();
            $('.zhez').hide();
        });
        /!*分享框*!/
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