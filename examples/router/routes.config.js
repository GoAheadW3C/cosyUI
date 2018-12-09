import HelloWorld from '@/components/HelloWorld'
export default [
	{
	  path: '/',
	  name: 'HelloWorld',
	  component: HelloWorld
	},
	{
	  path: '/test',
	  name: 'test',
	  component: r => require.ensure([], () => r(require('../docs/test.md')))
	}
]