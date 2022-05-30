<template>
  <div class="settings">
    <div class="container">
      <FormItem>
        <template v-slot:title>Название турнира:</template>
        <template v-slot:content>
          <EInput
            class="settings__name-input"
            :data="{ required: true, inputMaxLength: 60 }"
            :styleConfig="{
              borderRadius: '4px',
              borderColor: '#303540',
              focusBorderColor: '#ff8420',
              backgroundColor: '#303540',
              filledBackgroundColor: '#303540',
              valueColor: '#fff',
              filledFontColor: '#ced5dc',
              filledColor: '#ced5dc',
              fontFamily: 'Raleway',
            }"
            @update:modelValue="setTournamentName"
          />
        </template>
      </FormItem>
      <FormItem>
        <template v-slot:title>Тип турнира:</template>
        <template v-slot:content>
          <div class="settings__select select">
            <SelectComponent
              :options="typeOptions"
              @update:modelValue="setTournamentType"
            />
            <div
              v-if="currentType === tournamentType.SingleElimination"
              class="select__items"
            >
              <ECheckbox
                :styleConfig="{
                  checked: {
                    backgroundColor: '#ff8420',
                    borderColor: '#ff8420',
                  },
                }"
                @change="thirdPlaceGame"
              />
              <div>
                Включить матч за 3-е место между проигравшими в полуфинале
              </div>
            </div>
            <div
              v-if="currentType === tournamentType.RoundRobin"
              class="select__items"
            >
              <div>Участник играют друг с другом</div>
              <SelectComponent
                id="amount-select"
                :options="howManyTimesOptions"
                @update:modelValue="setNumberOfGames"
              />
            </div>
          </div>
        </template>
      </FormItem>
      <FormItem>
        <template v-slot:title>Размер сетки:</template>
        <template v-slot:content>
          <div class="settings__select select">
            <SelectComponent
              :options="gridSizeOptions"
              @update:modelValue="setGridSize"
            />
            <div
              v-if="currentGridSize === gridSize.list"
              class="select__items-column"
            >
              <div>- по одному имени в каждой строке</div>
              <div>- отсортированы по порядку от лучших к худшим</div>
              <br />
              <ETextArea
                class="settings__textarea"
                :styleConfig="{
                  borderRadius: '4px',
                  backgroundColor: '#303540',
                  fontFamily: 'Raleway',
                  valueFontSize: '14px',
                }"
              />
            </div>
            <div
              v-if="currentGridSize === gridSize.number"
              class="select__items"
            >
              <EInput
                :data="{
                  required: true,
                  type: 'number',
                  helperText: 'Максимальное количество: 99',
                }"
                :styleConfig="{
                  borderRadius: '4px',
                  borderColor: '#303540',
                  focusBorderColor: '#ff8420',
                  backgroundColor: '#303540',
                  filledBackgroundColor: '#303540',
                  valueColor: '#fff',
                  filledFontColor: '#ced5dc',
                  filledColor: '#ced5dc',
                  fontFamily: 'Raleway',
                }"
              />
            </div>
          </div>
        </template>
      </FormItem>
      <FormItem>
        <template v-slot:title>Игра:</template>
        <template v-slot:content>
          <EInput
            class="settings__name-input"
            :data="{ required: true, inputMaxLength: 60, iconLeft: 'search' }"
            :styleConfig="{
              borderRadius: '4px',
              borderColor: '#303540',
              focusBorderColor: '#ff8420',
              backgroundColor: '#303540',
              filledBackgroundColor: '#303540',
              valueColor: '#fff',
              filledFontColor: '#ced5dc',
              filledColor: '#ced5dc',
              fontFamily: 'Raleway',
            }"
            @update:modelValue="searchGame"
          />
        </template>
      </FormItem>
      <FormItem>
        <template v-slot:content>
          <EButton>СОЗДАТЬ</EButton>
        </template>
      </FormItem>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import FormItem from "@/components/FormItem.vue";
import SelectComponent from "@/components/SelectComponent.vue";
import { tournamentType, howManyTimes, gridSize } from "@/typescript/enums";
import { ISelectOption } from "@/typescript/interfaces";

export default defineComponent({
  name: "SettingsView",
  components: { SelectComponent, FormItem },
  props: {},
  data() {
    return {
      currentType: 0,
      tournamentType,
      typeOptions: [
        {
          name: "Single Elimination",
          key: tournamentType.SingleElimination,
        },
        {
          name: "Double Elimination",
          key: tournamentType.DoubleElimination,
        },
        {
          name: "Round Robin",
          key: tournamentType.RoundRobin,
        },
      ],
      currentNumberTimes: 0,
      howManyTimes,
      howManyTimesOptions: [
        {
          name: "единажды",
          key: howManyTimes.One,
        },
        {
          name: "дважды",
          key: howManyTimes.Two,
        },
        {
          name: "трижды",
          key: howManyTimes.Three,
        },
      ],
      currentGridSize: 0,
      gridSize,
      gridSizeOptions: [
        {
          name: "Использовать кол-во участников из списка ниже",
          key: gridSize.list,
        },
        {
          name: "Указать произвольное кол-во команд",
          key: gridSize.number,
        },
      ],
    };
  },
  computed: {},
  methods: {
    setTournamentName(value: string) {
      console.log(value);
    },
    setTournamentType(value: ISelectOption) {
      this.currentType = value.key;
    },
    thirdPlaceGame(value: boolean) {
      console.log(value);
    },
    setNumberOfGames(value: ISelectOption) {
      console.log(value.key);
    },
    setGridSize(value: ISelectOption) {
      this.currentGridSize = value.key;
    },
    searchGame(value: string) {
      console.log(value);
    },
  },
});
</script>

<style lang="scss" scoped>
@import "@/assets/style/variables.scss";

.settings {
  min-height: calc(100vh - #{$header-height});
  height: fit-content;
  background: $background-color;
  padding-top: 50px;

  .container {
    width: 65vw;
    height: 100%;
    margin: 0 auto;
  }

  &__name-input {
    width: 440px;
  }

  &__select {
    width: 100%;
  }

  &__textarea {
    resize: none;
    width: 440px;
  }
}

.select {
  &__items {
    display: flex;
    align-items: center;
    font-size: 12px;
  }

  &__items-column {
    display: flex;
    flex-direction: column;
    font-size: 12px;
  }
}

#amount-select {
  margin-left: 30px;
  width: 130px;
}
</style>
