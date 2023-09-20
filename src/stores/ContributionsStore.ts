import { defineStore } from 'pinia'
import { ref } from 'vue'
import { startOfWeek, subWeeks } from 'date-fns'

export const useContributionsStore = defineStore('contributions', () => {
  const contributionData = ref<Record<string, number>>({})
  const startDate = getStartingDate()

  return { contributionData, startDate }
})

function getStartingDate() {
  const endOfStartingWeek = subWeeks(new Date(), 50)

  return startOfWeek(endOfStartingWeek, { weekStartsOn: 1 })
}
