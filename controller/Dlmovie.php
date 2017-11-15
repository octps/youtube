<?php
require __DIR__ . './../../vendor/autoload.php';

use YoutubeDl\YoutubeDl;
use YoutubeDl\Exception\CopyrightException;
use YoutubeDl\Exception\NotFoundException;
use YoutubeDl\Exception\PrivateVideoException;

function dlMovie($url) {
    $dl = new YoutubeDl([
        'continue' => true, // force resume of partially downloaded files. By default, youtube-dl will resume downloads if possible.
        'format' => 'bestvideo',
    ]);
    // For more options go to https://github.com/rg3/youtube-dl#user-content-options

    $dl->setDownloadPath('/var/www/product/mixer');
    // Enable debugging
    /*$dl->debug(function ($type, $buffer) {
        if (\Symfony\Component\Process\Process::ERR === $type) {
            echo 'ERR > ' . $buffer;
        } else {
            echo 'OUT > ' . $buffer;
        }
    });*/
    try {
        $video = $dl->download($url);
        echo $video->getTitle(); // Will return Phonebloks
        // $video->getFile(); // \SplFileInfo instance of downloaded file
    } catch (NotFoundException $e) {
        print_r($e);
        // Video not found
    } catch (PrivateVideoException $e) {
        print_r($e);
        // Video is private
    } catch (CopyrightException $e) {
        print_r($e);
        // The YouTube account associated with this video has been terminated due to multiple third-party notifications of copyright infringement
    } catch (\Exception $e) {
        print_r($e);
        // Failed to download
    }
}

$url = 'https://www.youtube.com/watch?v=oDAw7vW7H0c';
dlMovie($url);
