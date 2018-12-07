function unpack(rows, key){
  return rows.map(row => row[key])
}

export const data_gits= [
    { 
      id: '#',
      name: 'Name',
      git: 'Github'
    },

    { 
      id: '1',
      name: 'Sccot',
      git: 'https://github.com/Sccot'
    },

    {
      id: '2',
      name: 'andrew ',
      git: 'https://github.com/andrew '
    },

    { 
      id: '3',
      name: 'taylorotwell',
      git: 'https://github.com/taylorotwell'
    },

    {
      id: '4',
      name: 'egoist',
      git: 'https://github.com/egoist'
    },

    {
      id: '5',
      name: 'HugoGiraudel ',
      git: 'https://github.com/HugoGiraudel '
    },

    { 
      id: '6',
      name: 'ornicar',
      git: 'https://github.com/ornicar'
    },

    {
      id: '7',
      name: 'bebraw',
      git: 'https://github.com/bebraw'
    },

    {
      id: '8',
      name: 'nelsonic ',
      git: 'https://github.com/nelsonic '
    },

    { 
      id: '9',
      name: 'alexcrichton',
      git: 'https://github.com/alexcrichton'
    },

    {
      id: '10',
      name: 'jonathanong',
      git: 'https://github.com/jonathanong'
    },

  ]

  export const data_sleep_hours= [
    {
      id: '1',
      data: '2018-10-04',
      value: '7.2'
    },
    {
      id: '2',
      data: '2018-10-05',
      value: '6.8'
    },
    {
      id: '3',
      data: '2018-10-06',
      value: '7.5'
    },
    {
      id: '4',
      data: '2018-10-07',
      value: '7'
    },
    {
      id: '5',
      data: '2018-10-08',
      value: '6'
    },
    {
      id: '6',
      data: '2018-10-09',
      value: '8'
    },
    {
      id: '7',
      data: '2018-10-10',
      value: '7.7'
    },

  ]

const x_sleep = unpack(data_sleep_hours, 'data')
const y_sleep = unpack(data_sleep_hours, 'value')

export const data_sleep= {
  x: x_sleep,
  y: y_sleep,
}



    


