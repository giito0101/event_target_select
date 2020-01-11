# event_target_select
eventとtargetの理解を深める

## はじめに
基本的な内容ですが、javascriptの学習のためwebページでeventとtargetについて理解を深めてみた。
mouseover/out, mouseenter/leaveの動作が似ており、細かい動きが分かりにくいといった状態だっため整理もかねて実装。

## mouseover/out
イベントが複数回発生する

## mouseenter/leave
イベントが1回発生する

## イベントを発生させたオブジェクトへの参照
event.target:イベントが発生したDOM要素
event.relatedTarget:要素に入る前の要素
event.target:バブリング中のイベントが現在通過しているDOM要素
