import { Button, FormControl, FormLabel, MenuItem, Select, SimpleGrid, Text } from "@chakra-ui/react"
import React from "react"

const tags = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31,
]

const monts = [
  {
    name: 'Ianuarie',
    value: '1',
  },
  {
    name: 'Februarie',
    value: '2',
  },
  {
    name: 'Martie',
    value: '3',
  },
  {
    name: 'Aprilie',
    value: '4',
  },
  {
    name: 'Mai',
    value: '5',
  },
  {
    name: 'Iunie',
    value: '6',
  },
  {
    name: 'Iulie',
    value: '7',
  },
  {
    name: 'August',
    value: '8',
  },
  {
    name: 'Septembrie',
    value: '9',
  },
  {
    name: 'Octombrie',
    value: '10',
  },
  {
    name: 'Noiembrie',
    value: '11',
  },
  {
    name: 'Decembrie',
    value: '12',
  },
]

const years = Array.from(
  { length: 70 },
  (_, index) => new Date().getFullYear() - index
)

export default function DateOfBirth() {
  const [selectedTag, setSelectedTag] = React.useState('')
  const [selectedMonth, setSelectedMonth] = React.useState('')
  const [selectedYear, setSelectedYear] = React.useState('')
  const [lifePathNumber, setLifePathNumber] = React.useState('')

  let test = null

  const handleChangeTag = (event) => {
    setSelectedTag(event.target.value)
  }
  const handleChangeMonth = (event) => {
    setSelectedMonth(event.target.value)
  }

  const handleYearChange = (event) => {
    setSelectedYear(event.target.value)
  }

  /////////////////////////////////////

  ///Year////////////
  const yearArr = String(selectedYear)
    .split('')
    .map((num) => {
      return Number(num)
    })

  const sumYear = yearArr.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  )

  //--day--//
  const tagArr = String(selectedTag)
    .split('')
    .map((num) => {
      return Number(num)
    })

  const sumTag = tagArr.reduce(
    (acumulator, currentValue) => acumulator + currentValue,
    0
  )

  //--month--//
  const monthArr = String(selectedMonth)
    .split('')
    .map((num) => {
      return Number(num)
    })

  const sumMonth = monthArr.reduce(
    (acumulator, currentValue) => acumulator + currentValue,
    0
  )

  ////////////////////////////////////////

  function handleCalculate() {
    let lifePath = 0
    const total = sumTag + sumMonth + sumYear

    const totalArr = String(total)
      .split('')
      .map((num) => {
        return Number(num)
      })

    if (total === 22) {
      lifePath = total
    } else if (total === 33) {
      lifePath = total
    } else {
      const sumTotal = totalArr.reduce(
        (acumulator, currentValue) => acumulator + currentValue,
        0
      )

      if (sumTotal === 11) {
        lifePath = sumTotal
      } else if (sumTotal === 22) {
        lifePath = sumTotal
      } else if (sumTotal === 33) {
        lifePath = sumTotal
      } else {
        const sumTotalArr = String(sumTotal)
          .split('')
          .map((num) => {
            return Number(num)
          })
        const finalTotal = sumTotalArr.reduce(
          (acumulator, currentValue) => acumulator + currentValue,
          0
        )

        lifePath = finalTotal
      }
    }
    setLifePathNumber(lifePath)
  }

  return (
    <>
      <Text
        textAlign={'left'}
        color={'#fff'}
        paddingX={4}
        paddingY={1}
        marginBottom={2}
        backgroundColor={'#7e3a06'}
      >
        Cifra destinului - Calculator
      </Text>
      <Text  textAlign={'left'}>
        Data nasterii:
      </Text>
      <SimpleGrid columns={3} spacing={2} marginBottom={6}>
        
          <FormControl>
            <FormLabel id="tag">Ziua</FormLabel>
            <Select
              borderColor={'#333'}
              labelId="tag"
              id="tag"
              value={selectedTag}
              label="Tag"
              onChange={handleChangeTag}
            >
              {tags.map((tag, index) => (
                <option key={index} value={tag}>
                  {tag}
                </option>
              ))}
            </Select>
          </FormControl>
       

       
          <FormControl>
            <FormLabel id="month">Luna</FormLabel>
            <Select
              borderColor={'#333'}
              labelId="month"
              id="month"
              value={selectedMonth}
              label="Month"
              onChange={handleChangeMonth}
            >
              {monts.map((month, index) => (
                <option key={index} value={month.value}>
                  {month.name}
                </option>
              ))}
            </Select>
          </FormControl>
        

       
          <FormControl>
            <FormLabel id="month">Anul</FormLabel>
            <Select
              borderColor={'#333'}
              labelId="month"
              id="month"
              value={selectedYear}
              label="Month"
              onChange={handleYearChange}
             
            >
              {years.map((year, index) => (
                  <option key={index} value={year}>
                    {year}
                  </option>
                 
              ))}
            </Select>
          </FormControl>
        

        <Button
          colorScheme={'green'}
          isDisabled={selectedTag && selectedMonth && selectedYear ? false : true}
          onClick={handleCalculate}
        >
          Calculeaza
        </Button>
        </SimpleGrid>
        {lifePathNumber && (
          <>
            {/* <div className="text-left mt-2">
              <Typography variant="subtitle1" fontWeight={600}>
                Life Path Number:
              </Typography>
              <Typography variant="subtitle1">
                {selectedTag + ' ' + selectedMonth.name}
              </Typography>
            </div> */}
            <div className="w-full flex flex-col items-center justify-center  mt-4">
              <Text variant="subtitle1" fontWeight={500}>
                Cifra destinului este:
              </Text>
              <div
                className="rounded-full w-12 h-12 text-center justify-center flex items-center bg-cover bg-center font-bold text-white"
                style={{
                  backgroundImage:
                    ' url(/images/copper-color-background-with-blur-and-smooth-texture-for-festive-metallic-graphic-design-element-vector.jpg)',
                }}
              >
                {lifePathNumber}
              </div>
            </div>
          </>
        )}
     
    </>
  )
}