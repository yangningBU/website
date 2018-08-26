import { h, Component } from 'preact';
import style from './style';

export default function Project ({letter}) {
  return (
    <div class={style.project}>
      <h1>Project: {letter}</h1>
    </div>
  );
}
