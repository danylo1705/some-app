import React from 'react'
import s from './blog.module.css'
export default function Blog() {
  return (
    <div className={s.blog}>
        <div className={s.left_col}>
            <h2><span>OUR</span><br/>BLOG</h2>
            <div className={s.some_txt}>
                <p>18 Feb 16</p>
                <div className={s.left_link}>
                    <p>Duis tempor neque id leo congue vulputate</p>
                    <img src="http://demo.qodearena.com/projects/anticahtml/img/arrow_yellow.png" alt="" />
                </div>
                <p>Comments 3</p>
            </div>
        </div>
        <ul className={s.right_col}>
            <li>
                <img className={s.li_img} src="http://demo.qodearena.com/projects/anticahtml/img/blogs_img1.jpg" alt="" />
                <p>18 FEB 16</p>
                <div className={s.link}>
                    <p>CURABITUR VENENATIS TURPIS</p>
                    <img src="http://demo.qodearena.com/projects/anticahtml/img/arrow_yellow.png" alt="" />
                </div>
                <p>Comments 3</p>
            </li>
            <li>
                <img className={s.li_img} src="http://demo.qodearena.com/projects/anticahtml/img/blogs_img1.jpg" alt="" />
                <p>16 FEB 16</p>
                <div className={s.link}>
                    <p>UT VEL TORTOR UT URNA FRINGILLA PORTTITOR</p>
                    <img src="http://demo.qodearena.com/projects/anticahtml/img/arrow_yellow.png" alt="" />
                </div>
                <p>Comments 2</p>
            </li>
            <li>
                <img className={s.li_img} src="http://demo.qodearena.com/projects/anticahtml/img/blogs_img1.jpg" alt="" />
                <p>14 FEB 16</p>
                <div className={s.link}>
                    <p>SED TINCIDUNT MASSA AC ULTRICES LAOREET</p>
                    <img src="http://demo.qodearena.com/projects/anticahtml/img/arrow_yellow.png" alt="" />
                </div>
                <p>Comments 1</p>
            </li>
            <li>
                <img className={s.li_img} src="http://demo.qodearena.com/projects/anticahtml/img/blogs_img1.jpg" alt="" />
                <p>12 FEB 16</p>
                <div className={s.link}>
                    <p>DONEC ET FELIS IN EST MATTIS</p>
                    <img src="http://demo.qodearena.com/projects/anticahtml/img/arrow_yellow.png" alt="" />
                </div>
                <p>Comments 0</p>
            </li>
        </ul>
        <div className={s.bg_rect}></div>
        <div className={s.bg_topics}>OPICS</div>
        <img src="http://demo.qodearena.com/projects/anticahtml/img/home_first/topics1.jpg" className={s.bg_img}/>
    </div>
  )
}
