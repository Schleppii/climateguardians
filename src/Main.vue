<template>
  <header>
    <div class="header-wrapper">
      <div class="logo-group">
        <img src="@/assets/logo.png" alt="Logo" class="logo2" />
        <img
          src="https://see.fontimg.com/api/rf5/E4Xnl/NDA0ZTVlNzBjMmU5NGE4YzgzNGMyZmRmYWI1NTRkNjYub3Rm/Q2xpbWF0ZUd1YXJkaWFucw/welcome-to-future-1.png?r=fs&h=65&w=1000&fg=000000&bg=FFFFFF&tb=1&s=65"
          alt="Ai fonts"
          class="logo"
        />
      </div>
      <div class="mdi-icons">
        <nav>
          <ul>
            <li>
              <a href="https://www.instagram.com"
                ><v-icon icon="mdi-instagram"></v-icon
              ></a>
            </li>
            <li>
              <a href="https://www.facebook.com"
                ><v-icon icon="mdi-facebook"></v-icon
              ></a>
            </li>
            <li>
              <a href="https://www.youtube.com"
                ><v-icon icon="mdi-youtube"></v-icon
              ></a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>

  <!-- Lokales Menü -->
  <nav :class="['lokalesmenue', lokalesmenue]">
    <li>
      <a href="/">Startseite </a>
    </li>
    <li>
      <a href="emissioneninfo">Was sind Emissionen? </a>
    </li>
    <li>
      <a href="klimawandel">Klimawandel und unsere Zukunft </a>
    </li>
    <li>
      <a href="/emissionenview">Emissionen im Überblick</a>
    </li>
  </nav>
  <div class="content-wrapper">
    <router-view></router-view>
  </div>

  <!-- Footer mit rechtlichen Hinweisen -->
  <div class="footer" style="display: flex; flex-wrap: wrap">
    <a href="/impressum">Impressum</a> |
    <a href="/datenschutz">Datenschutzrichtlinie</a> |
    <a href="/cookies">Cookie-Richtlinien</a> |
    <a href="/nutzungsrichtlinien">Nutzungsrichtlinien</a>
  </div>
</template>

<script>
export default {
  name: "ResponsiveComponent",
  data() {
    return {
      istRechtsNachLinks: false, // Standardmäßig Links nach Rechts
    };
  },
  computed: {
    lokalesmenue() {
      return this.istRechtsNachLinks
        ? "menue-rechtsnachlinks"
        : "menue-linksnachrechts";
    },
  },
  mounted() {
    const sprache = navigator.language || navigator.userLanguage || "en";
    this.istRechtsNachLinks = ["ar", "he", "fa", "ur"].some((code) =>
      sprache.startsWith(code)
    );
  },
};
</script>

<style scoped>
/* Standardmäßig Links-nach-Rechts */
.menue-linksnachrechts {
  text-align: left;
  direction: ltr;
}

/* Rechts-nach-Links (für Sprachen wie Arabisch, Hebräisch, ...) */
.menue-rechtsnachlinks {
  text-align: right;
  direction: rtl;
}

.content-wrapper {
  display: flex;
  flex-direction: column;
  max-width: 80%;
  margin: 0 auto;
  padding: 20px;
}

.content {
  padding-top: 80px;
}

.header-wrapper {
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
  justify-content: space-between;
  width: 100%;
  align-items: center;
}
header {
  height: 95px;
  width: 100%;
  background-color: var(--second-bgcolour);

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
}

.logo-group {
  display: flex;
  align-items: center;
}

.logo {
  width: 320px;
  margin-right: 10px;
}
.logo2 {
  width: 90px;
  margin-right: 10px;
}

nav ul {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}

nav ul li {
  margin-left: 0;
  margin-right: 20px;
}

nav a {
  text-decoration: none;
  color: black;
  font-size: 1em;
}

.lokalesmenue {
  top: 95px;
  width: 100%;
  padding: 12px;
  background-color: var(--main-bgcolour);
}

.lokalesmenue a {
  text-decoration: none;
  color: #000;
}
.lokalesmenue a:hover {
  color: var(--hover-colour);
}

.footer {
  height: 60px;
  width: 100%;
  background-color: var(--main-bgcolour);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 10px;
}

.footer a {
  text-decoration: none;
  color: #fff;
  margin: 0 10px;
}

.footer a:hover {
  color: var(--hover-colour);
}

/* Handy (bis 767px) */
@media only screen and (max-width: 767px) {
  h1 {
    font-size: var(--fs2);
  }
  .mdi-icons {
    margin: 0 0px;
    font-size: 14px;
  }

  .logo-group {
    max-width: 20%;
  }

  .logo {
    width: 150px;
    margin-right: 5px;
  }
  .logo2 {
    width: 60px;
    margin-right: 5px;
  }
}

/* Tablet (zwischen 768px und 1023px) */
@media only screen and (min-width: 768px) and (max-width: 1023px) {
  h1 {
    font-size: var(--fs4);
  }
  .content {
    font-size: var(--fs3);
  }
}
</style>
