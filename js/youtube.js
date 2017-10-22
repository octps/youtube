var movieDefalut = [
  'Nsct-e-HVE0',
  'l_RfediFJFQ',
  'DmCmW1EYuo0',
  'cRKhrD-MuW4'
]

var ytPlayer = {};

var movieCount = 5;

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
}


$(function() {
   $('#set1').click(function(e) {
      setMovieData(0,e['currentTarget']);
   });
   $('#set2').click(function(e) {
      setMovieData(1,e['currentTarget']);
   });
   $('#set3').click(function(e) {
      setMovieData(2,e['currentTarget']);
   });
   $('#set4').click(function(e) {
      setMovieData(3,e['currentTarget']);
   });
 });


var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// YouTubeの埋め込み
function onYouTubeIframeAPIReady() {
  ytPlayer[1] = new YT.Player(
       'player1', // 埋め込む場所の指定
        {
          width: 300, // プレーヤーの幅
          height: 169, // プレーヤーの高さ
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
          width: 300, // プレーヤーの幅
          height: 169, // プレーヤーの高さ
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

  ytPlayer[3] = new YT.Player(
       'player3', // 埋め込む場所の指定
        {
          width: 300, // プレーヤーの幅
          height: 169, // プレーヤーの高さ
          videoId: movieDefalut[2], // YouTubeのID
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

  ytPlayer[4] = new YT.Player(
       'player4', // 埋め込む場所の指定
        {
          width: 300, // プレーヤーの幅
          height: 169, // プレーヤーの高さ
          videoId: movieDefalut[3], // YouTubeのID
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
   $('#start1').click(function() {
          ytPlayer[1].playVideo();
       }
   );
   $('#start2').click(function() {
           ytPlayer[2].playVideo();
       }
   );
   $('#start3').click(function() {
           ytPlayer[3].playVideo();
       }
   );
   $('#start4').click(function() {
           ytPlayer[4].playVideo();
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
   $('#stop3').click(function() {
           ytPlayer[3].pauseVideo();
       }
   );
   $('#stop4').click(function() {
           ytPlayer[4].pauseVideo();
       }
   );

   $('#all_start').click(function() {
            ytPlayer[1].playVideo();
            ytPlayer[2].playVideo();
            ytPlayer[3].playVideo();
            ytPlayer[4].playVideo();
       }
   );

   $('#all_pouse').click(function() {
            ytPlayer[1].pauseVideo();
            ytPlayer[2].pauseVideo();
            ytPlayer[3].pauseVideo();
            ytPlayer[4].pauseVideo();
       }
   );

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
var movieCount = 4;
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