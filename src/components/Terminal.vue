  <template>
  <div id="terminal" class="shadow p-3 mb-5 bg-white rounded">
    <ul>
      <li v-for="(line, index) in lines" :key="index"  :class="{ 'error': line.type === 'error' , 'warning': line.type === 'warning'}">
          {{ line.message }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Terminal",
  data() {
    return {
      lines: [
        { type: "info", message : "=============================" },
        { type: "info", message : "Initializing ..." },
        { type: "info", message : "=============================" }
        ],
    };
  },
  mounted() {
    this.$sse
      .create("/api/v1/console")
      .on("message", (msg) => {
        this.addLine(msg);
      })
      .on("error", (err) => {
        console.error("Failed to parse or lost connection:", err);
      })
      .connect()
      .catch((err) => {
        console.error("Failed make initial connection:", err);
      });
  },
  methods: {
    addLine(line) {
      if (this.lines.length == 100) {
        this.lines.shift();
      }
      this.lines.push(JSON.parse(line));

      // position du scroll :)
      // var elem = this.$el;
      // elem.scrollTop =  elem.scrollHeight + 120;

    },
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap");

#terminal {
  font-family: "Roboto", Helvetica, Arial, sans-serif;
  margin-top: 10px;
  text-align: left;
  height: 500px;
  width: 100%;

  background-color: black;
  background-image: radial-gradient(#4886d6, black 120%);
  //color: rgb(197, 196, 196);
  color: white;
  font: 0.9rem Inconsolata, monospace;
  text-shadow: 0 0 5px #c8c8c8;

  // scrollbar-color: rgb(121, 120, 197) rgb(68, 9, 230);
  scrollbar-width: thin;
}

div#terminal ul {
  list-style: none;
  margin-left: 0;
  padding-left: 0;
  height: 100%;

  overflow: auto;
}

div#terminal li {
  padding-left: 1em;
  text-indent: -1em;
}

div#terminal li:before {
  content: "$";
  padding-right: 1px;
  color: white;
}

div#terminal li.error {
  color: red;
}
div#terminal li.warning {
  color: yellow;
}


</style>