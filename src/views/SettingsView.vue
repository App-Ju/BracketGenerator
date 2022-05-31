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
            @update:modelValue="settingsStore.setTournamentName"
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
                @change="settingsStore.set3rdPlaceGame"
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
                :options="howManyGamesOptions"
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
              :options="bracketSizeOptions"
              @update:modelValue="setBracketSizeType"
            />
            <div
              v-if="currentBracketSize === bracketSize.list"
              class="select__items-column"
            >
              <div>- по одному имени в каждой строке</div>
              <div>- отсортированы по порядку от лучших к худшим</div>
              <br />
              <ETextArea
                class="settings__textarea"
                :styleConfig="{
                  borderRadius: '4px',
                  valueColor: '#ced5dc',
                  backgroundColor: '#303540',
                  borderColor: '#303540',
                  focusBorderColor: '#ff8420',
                  fontFamily: 'Raleway',
                }"
                @update:modelValue="settingsStore.setParticipantNames"
              />
            </div>
            <div
              v-if="currentBracketSize === bracketSize.number"
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
                @update:modelValue="settingsStore.setParticipantNumber"
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
          <EButton
            :styleConfig="{
              backgroundColor: '#ff8420',
              hover: {
                backgroundColor: '#fc9949',
              },
              active: {
                backgroundColor: '#fd7c14',
              },
            }"
            >СОЗДАТЬ</EButton
          >
        </template>
      </FormItem>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useSettingsStore } from "@/store/settings";
import FormItem from "@/components/FormItem.vue";
import SelectComponent from "@/components/SelectComponent.vue";
import { tournamentType, howManyGames, bracketSize } from "@/typescript/enums";
import { ISelectOption } from "@/typescript/interfaces";

export default defineComponent({
  name: "SettingsView",
  components: { SelectComponent, FormItem },
  setup() {
    const settingsStore = useSettingsStore();
    return { settingsStore };
  },
  props: {},
  data() {
    return {
      currentType: 1,
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
      currentNumberOfGames: 1,
      howManyGames,
      howManyGamesOptions: [
        {
          name: "единажды",
          key: howManyGames.One,
        },
        {
          name: "дважды",
          key: howManyGames.Two,
        },
        {
          name: "трижды",
          key: howManyGames.Three,
        },
      ],
      currentBracketSize: 1,
      bracketSize,
      bracketSizeOptions: [
        {
          name: "Использовать кол-во участников из списка ниже",
          key: bracketSize.list,
        },
        {
          name: "Указать произвольное кол-во команд",
          key: bracketSize.number,
        },
      ],
    };
  },
  computed: {},
  methods: {
    /**
     * Задает тип турнирной сетки
     * @param type
     */
    setTournamentType(type: ISelectOption): void {
      this.currentType = type.key;
      this.settingsStore.setType(type);
    },
    /**
     * Задает количество игр между участниками, для типа турнира = 3
     * @param value
     */
    setNumberOfGames(value: ISelectOption): void {
      this.currentNumberOfGames = value.key;
      this.settingsStore.setNumberOfGames(value);
    },
    /**
     * Задает тип вычисления количества участников
     * @param value
     */
    setBracketSizeType(value: ISelectOption): void {
      this.currentBracketSize = value.key;
      this.settingsStore.setBracketSizeType(value);
    },
    // searchGame(value: string): void {
    //   console.log(value);
    // },
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

:deep(textarea) {
  width: 413px;
  background-color: $item-background-color;
  resize: none;
}
</style>
