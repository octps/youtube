var movieDefalut = [
  'HTE8z7PIyug',
  'VyzqHFdzBKg',
];

var ytPlayer = {};

var movieCount = 3;

function setMovieData (number,target) {
  var block = $(target.parentNode);
  var val = block.find("input").val();
  var valArray = val.split('=');
  movieDefalut[number] = valArray[1];
  setMovie(number);
}


function setMovie(number) {
    var movieNumber = movieDefalut[number];
    var intNumber = parseInt(number) + 1;
    ytPlayer[intNumber].cueVideoById(movieDefalut[number]);
    ytPlayer[intNumber].playVideo();
}

function mySeekTo(sec) {
    player.seekTo(sec,true);
}


var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

window.player = {};
window.player.width = 480;
window.player.height = 240;

// YouTubeの埋め込み
function onYouTubeIframeAPIReady() {
  ytPlayer[1] = new YT.Player(
       'player1', // 埋め込む場所の指定
        {
          width: window.player.width, // プレーヤーの幅
          height: window.player.height, // プレーヤーの高さ
          videoId: movieDefalut[0], // YouTubeのID
  		    events: {
                'onReady': onPlayerReady, // プレーヤーの準備ができたときに実行
                'onStateChange': onPlayerStateChange // プレーヤーの状態が変更されたときに実行
           },
           playerVars: {
                rel: 0, // 再生終了後に関連動画を表示するかどうか設定
                autoplay: 0, // 自動再生するかどうか設定
                controls: 0, // コントロールバーを表示しない
                showinfo: 0 // 動画情報を表示しない
           }
      }
   );

  ytPlayer[2] = new YT.Player(
       'player2', // 埋め込む場所の指定
        {
          width: window.player.width, // プレーヤーの幅
          height: window.player.height, // プレーヤーの高さ
          videoId: movieDefalut[1], // YouTubeのID
  		    events: {
                'onReady': onPlayerReady, // プレーヤーの準備ができたときに実行
                'onStateChange': onPlayerStateChange // プレーヤーの状態が変更されたときに実行
           },
           playerVars: {
                rel: 0, // 再生終了後に関連動画を表示するかどうか設定
                autoplay: 0, // 自動再生するかどうか設定
                controls: 0, // コントロールバーを表示しない
                showinfo: 0 // 動画情報を表示しない
           }
      }
   );


}

$(function() {

   //個別のコントローラー start stop
   $('#start1').click(function() {
          ytPlayer[1].playVideo();
       }
   );
   $('#start2').click(function() {
           ytPlayer[2].playVideo();
       }
   );

   $('#stop1').click(function() {
          ytPlayer[1].pauseVideo();
       }
   );
   $('#stop2').click(function() {
           ytPlayer[2].pauseVideo();
       }
   );

   //個別のコントローラー set
   $('#set1').click(function(e) {
      setMovieData(0,e['currentTarget']);
   });
   $('#set2').click(function(e) {
      setMovieData(1,e['currentTarget']);
   });


   //個別のコントローラー seek
  window.pintime1 = null;
   $('#break1').click(function(e) {
      window.seek1();
  });
  $('#clearpin1').click(function(e) {
      window.clearpin1();
  });

  window.seek1 = function() {
    if (window.pintime1 == null) {
      window.pintime1 = ytPlayer[1].getCurrentTime();
      $("#break1").html("back [ d ]key");
      $("#clearpin1").html("clear [ f ]key");
      return;
    }
    ytPlayer[1].seekTo(parseFloat(window.pintime1),true);
  }
  window.clearpin1 = function() {
      window.pintime1 = null;
      $("#break1").html("pin");
      $("#clearpin1").html("clear");
  };

  window.pintime2 = null;
  $('#break2').click(function(e) {
      window.seek2();
  });
  $('#clearpin2').click(function(e) {
      window.clearpin2();
  });

  window.seek2 = function() {
    if (window.pintime2 == null) {
      window.pintime2 = ytPlayer[2].getCurrentTime();
      $("#break2").html("back [ j ]key");
      $("#clearpin2").html("clear [ k ]key");
      return;
    }
    ytPlayer[2].seekTo(parseFloat(window.pintime2),true);
  }
  window.clearpin2 = function() { 
    window.pintime2 = null;
    $("#break2").html("pin");
    $("#clearpin2").html("clear");
  }



   //個別のコントローラー speed
   $('#range1').change(function(e) {
          var val = $(e['currentTarget']).val();
          ytPlayer[1].setPlaybackRate(val);          
        }
   );
   $('#range2').change(function(e) {
          var val = $(e['currentTarget']).val();
          ytPlayer[2].setPlaybackRate(val);          
        }
   );


   //個別のコントローラー volume
  $('#volume1').on( 'input', function (e) {
        var val = $(e['currentTarget']).val();
        ytPlayer[1].setVolume(val);                  
  } );
  $('#volume1').change(function(e) {
        var val = $(e['currentTarget']).val();
        ytPlayer[1].setVolume(val);          
      }
  );

  $('#volume2').on( 'input', function (e) {
        var val = $(e['currentTarget']).val();
        ytPlayer[2].setVolume(val);                  
  } );
  $('#volume2').change(function(e) {
        var val = $(e['currentTarget']).val();
        ytPlayer[2].setVolume(val);          
      }
  );

   //全体のコントローラー start stop
  $('#all_start').click(function() {
          ytPlayer[1].playVideo();
          ytPlayer[2].playVideo();
        }
  );

  $('#all_pouse').click(function() {
            ytPlayer[1].pauseVideo();
            ytPlayer[2].pauseVideo();
      }
  );

  //全体のコントローラー クロスフェーダー
  $('#crossfader').on('input',function(e) {
    var val = $(e['currentTarget']).val();
    var absVal = Math.abs(val);
    var volume = 100 - absVal; 
    console.log(volume);
    if (val < 0) {
      ytPlayer[2].setVolume(volume);
    } else {
      ytPlayer[1].setVolume(volume);
    }
  });
  $('#crossfader').change(function(e) {
    var val = $(e['currentTarget']).val();
    var absVal = Math.abs(val);
    var volume = 100 - absVal; 
    if (val < 0) {
      ytPlayer[2].setVolume(volume);
    } else {
      ytPlayer[1].setVolume(volume);
    }
  });

  // key操作
  $(document).on('keydown',function(e) {
    if (e.keyCode == "68") {
      window.seek1();
      // console.log("f");
    }
    if (e.keyCode == "70") {
      window.clearpin1();
      // console.log("d");
      // console.log("clear d");
    }
    if (e.keyCode == "74") {
      window.seek2();
      // console.log("j");
    }
    // console.log(e.keyCode)
    if (e.keyCode == "75") {
      window.clearpin2();
      // console.log("k");
      // console.log("clear k");
    }


  });

 });


// $(function() {
//    // 再生
//    $('#play').click(function() {
//      // playerReadyがtrueのときだけ実行
//       if(playerReady) {
//            ytPlayer.playVideo();
//        }
//    });
//  // 一時停止
//  $('#pause').click(function() {
//         // playerReadyがtrueのときだけ実行
//       if(playerReady) {
//            ytPlayer.pauseVideo();
//       }
//    });
//  // 1分前へ
//  $('#prev').click(function() {
//      // playerReadyがtrueのときだけ実行
//       if(playerReady) {
//            // 現在の再生時間取得
//             var currentTime = ytPlayer.getCurrentTime();
//             // シークバーの移動
//          ytPlayer.seekTo(currentTime - 60);
//       }
//    });
//  // 1分先へ
//  $('#next').click(function() {
//      // playerReadyがtrueのときだけ実行
//       if(playerReady) {
//            // 現在の再生時間取得
//             var currentTime = ytPlayer.getCurrentTime();
//             // シークバーの移動
//          ytPlayer.seekTo(currentTime + 60);
//       }
//    });
//  // 音量アップ(+10)
//    $('#volup').click(function() {
//         // playerReadyがtrueのときだけ実行
//       if(playerReady) {
//            // 現在の音量取得
//           var currentVol = ytPlayer.getVolume();
//           // 音量の変更
//             ytPlayer.setVolume(currentVol + 10);
//         }
//    });
//  // 音量ダウン(-10)
//    $('#voldown').click(function() {
//       // playerReadyがtrueのときだけ実行
//       if(playerReady) {
//            // 現在の音量取得
//           var currentVol = ytPlayer.getVolume();
//           // 音量の変更
//             ytPlayer.setVolume(currentVol - 10);
//         }
//    });
//  // ミュート
//  $('#mute').click(function() {
//      // playerReadyがtrueのときだけ実行
//       if(playerReady) {
//            // ミュートされているかどうか
//             if(ytPlayer.isMuted()) {
//                 // ミュートの解除
//               ytPlayer.unMute();
//           } else {
//                 // ミュート
//              ytPlayer.mute();
//             }
//        }
//    });
// });

var playerReady = false;
var conunt = 0;
var movieCount = 2;
function onPlayerReady(event) {
	conunt += 1;
	if(movieCount == conunt) {
   // 動画再生
	  // ytPlayer1.playVideo();
	  // ytPlayer2.playVideo();
	  // ytPlayer3.playVideo();
	  // ytPlayer4.playVideo();
	}
  // プレーヤーの準備ができたとき
  playerReady = true;
  var me = $("#player1").contents().find('".video-stream.html5-main-video"');
  console.log(me);
}

function onPlayerStateChange(event) {
   // 現在のプレーヤーの状態を取得
   var ytStatus = event.data;

  // 再生終了したとき
 if (ytStatus == YT.PlayerState.ENDED) {
     console.log('再生終了');
      // 動画再生
     event.target.playVideo();
   }
   // 再生中のとき
   if (ytStatus == YT.PlayerState.PLAYING) {
       console.log('再生中');
   }
   // 停止中のとき
   if (ytStatus == YT.PlayerState.PAUSED) {
        console.log('停止中');
   }
   // バッファリング中のとき
  if (ytStatus == YT.PlayerState.BUFFERING) {
     console.log('バッファリング中');
  }
   // 頭出し済みのとき
 if (ytStatus == YT.PlayerState.CUED) {
      console.log('頭出し済み');
 }
}