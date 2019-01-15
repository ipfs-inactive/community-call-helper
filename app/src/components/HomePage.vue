<template>
    <div class="hompage">
        <h1 class="center">Community Call Utils</h1>
        <main class="pa4 black-80">
            <div class="measure center">
                <fieldset id="a" class="ba b--transparent ph0 mh0">
                <legend class="f4 fw6 ph0 mh0">Broadcast Community Call 🎉🎊🎉 </legend>
                <div class="mt3">
                    <label class="db fw6 lh-copy f6" for="working-group">Name of Working Group</label>
                    <input class="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="textfield" name="working-group"  id="working-group" v-model="workingGroup">
                </div>
                <div class="mv3">
                    <label class="db fw6 lh-copy f6" for="textfield">Name of Call</label>
                    <input class="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="textfield" name="textfield"  id="textfield" v-model="callName">
                </div>
                <div class="mv3">
                    <label class="db fw6 lh-copy f6" for="textfield">Announcment</label>
                    <input class="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="textfield" name="textfield"  id="textfield" v-model="announcement">
                </div>
                </fieldset>
                <div class="">
                <input class="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib popup" type="submit" value="Submit" @click="createPost()">
                </div>
            </div>
        </main>
    </div>
</template>
<script>
import axios from 'axios'

export default {
  name: 'HomePage',
  data: () => ({
    callName: null,
    workingGroup: null,
    announcement: null
  }),
  methods: {
    async createPost() {
      let url = `https://api.github.com/repos/pkafei/Distributed-Medicine/issues?access_token=${localStorage.token}`
      let response = await axios.post(url, {
          title: this.workingGroup,
          body: this.callName
      })
      console.log(response)
    }
  }
}
</script>
<style>
    h1 {
        text-align: center;
    }
</style>
