import BooleanFormatter from "./components/table/formatters/Boolean";
import LinkFormatter from "./components/table/formatters/Link";
import LinkNameFormatter from "./components/table/formatters/LinkName";

export const columns = [
  {
    key: 'id',
    name: 'ID',
    sortable: false
  },
  {
    key: 'name',
    name: 'Name',
    sortable: true
  },
  {
    key: 'link',
    name: 'Link',
    sortable: false,
    formatter: LinkFormatter
  },
  {
    key: 'accessable',
    name: 'Accessable',
    sortable: true,
    formatter: BooleanFormatter
  }
];

export const columns2 = [
  {
    key: 'id',
    name: 'ID',
    sortable: false
  },
  {
    key: 'name',
    name: 'Name',
    sortable: true,
    formatter: LinkNameFormatter
  },
  {
    key: 'email',
    name: 'Email',
    sortable: true,
  },
]

export const rows = [
  {
    id: 1,
    name: 'Google',
    link: 'http://google.com',
    accessable: true
  },
  {
    id: 2,
    name: 'Facebook',
    link: 'http://facebook.com',
    accessable: true
  },
  {
    id: 3,
    name: 'Telegram',
    link: 'http://telegram.com',
    accessable: false
  },
]
export const rows2 = [
  {
    id: 1,
    name: 'Ilya',
    email: 'test@test.com',
  },
  {
    id: 2,
    name: 'Roman',
    email: 'tes2t@test.com',
  },
  {
    id: 3,
    name: 'Artemida',
    email: 'test3@test.com',
  },
]