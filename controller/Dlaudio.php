<?php
$filename = uniqid();
$fileExtensionBase = ".webw";
$fileExtensionOutput = ".mp3";
$baseFilename = $filename.$fileExtensionBase;
$outputFilename = $filename.$fileExtensionOutput;

$output = shell_exec("/usr/local/bin/youtube-dl -f webm -o $baseFilename https://www.youtube.com/watch?v=oDAw7vW7H0c && /usr/local/bin/ffmpeg -i $baseFilename -acodec libmp3lame -aq 4 $outputFilename && rm /var/www/product/mixer/$baseFilename");
print_r($output);
// require __DIR__ . './../../vendor/autoload.php';

// use YoutubeDl\YoutubeDl;
// use YoutubeDl\Exception\CopyrightException;
// use YoutubeDl\Exception\NotFoundException;
// use YoutubeDl\Exception\PrivateVideoException;

// function dlAudio($url) {
//     $dl = new YoutubeDl([
//         'extract-audio' => true,
//         'audio-format' => 'mp3',
//         'audio-quality' => 0, // best
//         'output' => '%(title)s.%(ext)s',
//     ]);

//     $dl->setDownloadPath('/var/www/product/mixer');
//     // Enable debugging
//     /*$dl->debug(function ($type, $buffer) {
//         if (\Symfony\Component\Process\Process::ERR === $type) {
//             echo 'ERR > ' . $buffer;
//         } else {
//             echo 'OUT > ' . $buffer;
//         }
//     });*/
//     try {
//         $video = $dl->download($url);
//         echo $video->getTitle(); // Will return Phonebloks
//         // $video->getFile(); // \SplFileInfo instance of downloaded file
//     } catch (NotFoundException $e) {
//         print_r($e);
//         // Video not found
//     } catch (PrivateVideoException $e) {
//         print_r($e);
//         // Video is private
//     } catch (CopyrightException $e) {
//         print_r($e);
//         // The YouTube account associated with this video has been terminated due to multiple third-party notifications of copyright infringement
//     } catch (\Exception $e) {
//         print_r($e);
//         // Failed to download
//     }
// }

// $url = 'https://www.youtube.com/watch?v=oDAw7vW7H0c';
// dlAudio($url);
