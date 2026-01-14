<script setup lang="ts">
import IconFailedCross from "@/components/icons/IconFailedCross.vue";
import settings from "@/settings/settings.json"
import { SelectedMusic, ParseStringWithVariable } from "@/main";
import IconEmptyBox from "@/components/icons/IconEmptyBox.vue";

const props = defineProps<{
  active?: boolean;
  music?: { name: string, "equal-to": {"title": string, "url": string, "tags": []}, isCorrect: boolean };
}>();

console.log("")

</script>

<template>
  <div :class="'parent ' + (active ? 'active' : '')">
    <div class="empty-guess" v-if="music === undefined"></div>

    <IconFailedCross v-if="music != undefined && music.name != 'Skipped'" class="cross"/>
    <IconEmptyBox v-else-if="music != undefined" class="cross"/>

    <div class="name-parent" v-if="music != undefined">
      <div class="name font-medium" v-if="music.name != 'Skipped'"> {{ music.name }} </div>
      <div class="skipped" v-else >  {{ ParseStringWithVariable(settings["phrases"]["skipped"]) }}  </div>
    </div>

    <div style="max-width: 60%;" v-if="music != undefined && music['equal-to'] != undefined && music.isCorrect">
      <div>
        <div v-for="tag in settings['tag-list']">
          {{ tag["display-name"] }}:

          <span v-if="tag.type == 'equal'">
              {{ ((music['equal-to'].tags[tag.name] === SelectedMusic.tags[tag.name]) ? tag.word['='] : tag.word['!=']).replace("{guess}", music['equal-to'].tags[tag.name]) }}
            </span>

          <span v-if="tag.type == 'tag-value'">
              {{ tag.word['*'].replace("{guess}", music['equal-to'].tags[tag.name]).replace("{value}", tag.word[SelectedMusic.tags[tag.name].toString()]) }}
            </span>

          <span v-if="tag.type == 'plus-minus' && (music['equal-to'].tags[tag.name] === SelectedMusic.tags[tag.name]) ">
              {{ tag.word['='].replace("{guess}", music['equal-to'].tags[tag.name]) }}
            </span>

          <span v-else-if="tag.type == 'plus-minus' && (music['equal-to'].tags[tag.name] !== SelectedMusic.tags[tag.name])">
              {{ ((music['equal-to'].tags[tag.name] > SelectedMusic.tags[tag.name]) ? tag.word['+'] : tag.word['-']).replace("{guess}", music['equal-to'].tags[tag.name]) }} }}
            </span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.active {
  border-color: var(--color-active-field) !important;
}

.parent {
  display: flex;

  padding: 0.5rem;
  margin-bottom: 0.5rem;
  border-width: 1px;
  align-items: center;
  border-color: var(--color-inactive-field);

  box-sizing: border-box;
  border-style: solid;
  .empty-guess {
    height: 1.25rem;
    width: 1.25rem;
  }
}

.cross {
  margin-right: 0.5rem;
}

.name-parent {
  justify-content: space-between;
  align-items: center;
  flex: 1 1 0%;
  display: flex;

  .name {
    --tw-text-opacity: 1;
    color: rgba(255, 255, 255, var(--tw-text-opacity));
  }

  .skipped {
    text-indent: 0.25em;
    color: var(--color-mg);
    letter-spacing: 0.2em;
    font-weight: 10;
  }
}

</style>