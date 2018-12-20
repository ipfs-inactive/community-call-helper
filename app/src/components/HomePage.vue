<template>
    <div class="hompage">
        <h1 class="center">Community Call Utils</h1>
        <main class="pa4 black-80">
            <form class="measure center">
                <fieldset id="a" class="ba b--transparent ph0 mh0">
                <legend class="f4 fw6 ph0 mh0">Broadcast Community Call 🎉🎊🎉 </legend>
                <div class="mt3">
                    <label class="db fw6 lh-copy f6" for="working-group">Name of Working Group</label>
                    <input class="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="textfield" name="working-group"  id="working-group" v-model="workingGroup">
                        {{ workingGroup }}
                </div>
                <div class="mv3">
                    <label class="db fw6 lh-copy f6" for="password">Name of Call</label>
                    <input class="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password">
                </div>
                <div class="mv3">
                    <label class="db fw6 lh-copy f6" for="password">Announcment</label>
                    <input class="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password">
                </div>
                </fieldset>
                <div class="">
                <input class="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib popup" type="submit" value="Submit" v-on:click.prevent="attention">
                </div>
            </form>
        </main>    
    </div>
</template>
<script>
export default {
  name: 'HomePage',
  methods: {
      attention: function(event) {
          event.preventDefault();
          alert(this.workingGroup)
      }
  }
}
</script>
<style>
    h1 {
        text-align: center;
    }
</style>

