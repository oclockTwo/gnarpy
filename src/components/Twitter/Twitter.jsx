"use client";
// eslint-disable-next-line react/no-unescaped-entities
import { useEffect } from "react";

function TwitterPost() {
  useEffect(() => {
    // 确保 twttr.widgets.load 方法存在
    const loadTwitterWidgets = () => {
      if (window.twttr && window.twttr.widgets) {
        window.twttr.widgets.load();
      }
    };

    if (!window.twttr) {
      const script = document.createElement("script");
      script.src = "https://platform.twitter.com/widgets.js";
      script.async = true;
      script.onload = loadTwitterWidgets;
      document.body.appendChild(script);
    } else {
      loadTwitterWidgets();
    }
  }, []);

  return (
    <div className="column-2 md:columns-3">
      <blockquote className="twitter-tweet">
        <p lang="en" dir="ltr">
          <a href="https://twitter.com/hashtag/Regretevator?src=hash&amp;ref_src=twsrc^tfw">
            #Regretevator
          </a>{" "}
          <br />
          pov: most gnarpy &#34;fans&#34;
          <br />
          <br />
          these are not my views, i actually love the new design{" "}
          <a href="https://t.co/gdDXBRlOy6">pic.twitter.com/gdDXBRlOy6</a>
        </p>
        — me oh my (@ApplebutGold){" "}
        <a href="https://twitter.com/ApplebutGold/status/1765070299412988224?ref_src=twsrc^tfw">
          March 5, 2024
        </a>
      </blockquote>
      <blockquote className="twitter-tweet">
        <p lang="en" dir="ltr">
          GNARPY REDESIGN is cool{" "}
          <a href="https://t.co/EHrP9WbYv2">pic.twitter.com/EHrP9WbYv2</a>
        </p>
        — Toaster frog aaa- (@frog_toaster){" "}
        <a href="https://twitter.com/frog_toaster/status/1763749204944421310?ref_src=twsrc^tfw">
          March 2, 2024
        </a>
      </blockquote>
      <blockquote className="twitter-tweet">
        <p lang="en" dir="ltr">
          WHAT IF WE KILLED YOU WHAT IF WE FUCKING KILLED YOU WHAT HAPPENS IF
          YOU DIED WHAT IF WE THREW ROCKS AT YOU{" "}
          <a href="https://t.co/jGKW5fRzcU">pic.twitter.com/jGKW5fRzcU</a>
        </p>
        — Jim “CornardKisser100” (@OhGollyOhgee){" "}
        <a href="https://twitter.com/OhGollyOhgee/status/1766663034636849382?ref_src=twsrc^tfw">
          March 10, 2024
        </a>
      </blockquote>
      <blockquote className="twitter-tweet">
        <p lang="en" dir="ltr">
          I&#39;ve been practicing draw animation lately so I might release a
          lot of videos yeah :P
          <br />
          anyways this is the animation meme
          <a href="https://twitter.com/hashtag/Regretevator?src=hash&amp;ref_src=twsrc^tfw">
            #Regretevator
          </a>{" "}
          <a href="https://twitter.com/hashtag/Regretevatorart?src=hash&amp;ref_src=twsrc^tfw">
            #Regretevatorart
          </a>{" "}
          <a href="https://twitter.com/hashtag/Regretevatorfanart?src=hash&amp;ref_src=twsrc^tfw">
            #Regretevatorfanart
          </a>{" "}
          <a href="https://twitter.com/hashtag/Gnarpy?src=hash&amp;ref_src=twsrc^tfw">
            #Gnarpy
          </a>{" "}
          <a href="https://twitter.com/hashtag/Animationmeme?src=hash&amp;ref_src=twsrc^tfw">
            #Animationmeme
          </a>{" "}
          <a href="https://t.co/q9sfWTTlYs">pic.twitter.com/q9sfWTTlYs</a>
        </p>
        — 💜Kat_Light✨ (@Lightney_KatDem){" "}
        <a href="https://twitter.com/Lightney_KatDem/status/1766259176253092144?ref_src=twsrc^tfw">
          March 9, 2024
        </a>
      </blockquote>
      <blockquote className="twitter-tweet">
        <p lang="en" dir="ltr">
          Ofcoursw someone gonna do this undertale referenc with the gnarpy
          colors
          <br />
          <br />
          (Creds on ticktock){" "}
          <a href="https://t.co/Fpy9purayG">pic.twitter.com/Fpy9purayG</a>
        </p>
        — rey (@rycurse){" "}
        <a href="https://twitter.com/rycurse/status/1763886195342520755?ref_src=twsrc^tfw">
          March 2, 2024
        </a>
      </blockquote>
      <blockquote className="twitter-tweet">
        <p lang="en" dir="ltr">
          oh em gee? More gnarpy (plural..) ?!?!?! <br />
          We&#39;re so doomed.
          <a href="https://twitter.com/hashtag/regretavator?src=hash&amp;ref_src=twsrc^tfw">
            #regretavator
          </a>{" "}
          📢❗️❗️ <a href="https://t.co/7Nv7Mmr9Sk">https://t.co/7Nv7Mmr9Sk</a>{" "}
          <a href="https://t.co/fyMTYtKKrT">pic.twitter.com/fyMTYtKKrT</a>
        </p>
        — Oct alien 🍉 (@Octalienuwu){" "}
        <a href="https://twitter.com/Octalienuwu/status/1764188348082479115?ref_src=twsrc^tfw">
          March 3, 2024
        </a>
      </blockquote>
      <blockquote className="twitter-tweet">
        <p lang="lt" dir="ltr">
          gnarpy 🐱🛸
          <a href="https://twitter.com/hashtag/gnarpy?src=hash&amp;ref_src=twsrc^tfw">
            #gnarpy
          </a>{" "}
          <a href="https://twitter.com/hashtag/Regretevator?src=hash&amp;ref_src=twsrc^tfw">
            #Regretevator
          </a>{" "}
          <a href="https://t.co/oLU4N2eqfa">pic.twitter.com/oLU4N2eqfa</a>
        </p>
        — FUNfacts (@FUNfaccts){" "}
        <a href="https://twitter.com/FUNfaccts/status/1765890913111269564?ref_src=twsrc^tfw">
          March 8, 2024
        </a>
      </blockquote>
      <blockquote className="twitter-tweet">
        <p lang="pt" dir="ltr">
          <a href="https://twitter.com/hashtag/gnarpy?src=hash&amp;ref_src=twsrc^tfw">
            #gnarpy
          </a>{" "}
          faz o L{" "}
          <a href="https://t.co/HkNcbIDGS6">pic.twitter.com/HkNcbIDGS6</a>
        </p>
        — Biscoito 🇧🇷🏳️‍🌈🍉 💫 working on comms 💫 (@shybuxim){" "}
        <a href="https://twitter.com/shybuxim/status/1765509082897670591?ref_src=twsrc^tfw">
          March 6, 2024
        </a>
      </blockquote>
      <blockquote className="twitter-tweet">
        <p lang="en" dir="ltr">
          gnarpy interaction moment{" "}
          <a href="https://t.co/cPfPJRvZdF">pic.twitter.com/cPfPJRvZdF</a>
        </p>
        — Thanie (@Thanie_lul){" "}
        <a href="https://twitter.com/Thanie_lul/status/1764458073995800754?ref_src=twsrc^tfw">
          March 4, 2024
        </a>
      </blockquote>
      <blockquote className="twitter-tweet">
        <p lang="en" dir="ltr">
          blood TW !<br />
          <br />
          Made my own gnarpy redesign since im not a fan of the current one,
          based it off aisha from neopets!{" "}
          <a href="https://twitter.com/hashtag/regretevator?src=hash&amp;ref_src=twsrc^tfw">
            #regretevator
          </a>{" "}
          <a href="https://twitter.com/hashtag/gnarpy?src=hash&amp;ref_src=twsrc^tfw">
            #gnarpy
          </a>{" "}
          <a href="https://twitter.com/hashtag/gnarpyregretevator?src=hash&amp;ref_src=twsrc^tfw">
            #gnarpyregretevator
          </a>{" "}
          <a href="https://t.co/1NRUXVYg27">pic.twitter.com/1NRUXVYg27</a>
        </p>
        — ura mametchi apologist (@detectiveanpan){" "}
        <a href="https://twitter.com/detectiveanpan/status/1764450316961890806?ref_src=twsrc^tfw">
          March 4, 2024
        </a>
      </blockquote>
      <blockquote className="twitter-tweet">
        <p lang="en" dir="ltr">
          The regrevator demon took possession of you 😔
          <br />
          Gnarpy kin{" "}
          <a href="https://t.co/zYqhvCtusi">pic.twitter.com/zYqhvCtusi</a>
        </p>
        — 🗿Manigoldo, the collector🗿 (@ManigoldoToys)
        <a href="https://twitter.com/ManigoldoToys/status/1764380602478784516?ref_src=twsrc^tfw">
          March 3, 2024
        </a>
      </blockquote>
    </div>
  );
}

export default TwitterPost;
