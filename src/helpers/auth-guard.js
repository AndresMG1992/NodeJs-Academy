export default [
    {
        path: '/users',
        roles: ['admin']
    },
    {
        path: '/users/protected',
        roles: ['reader']
    },
    {
        path: '/drivers',
        roles: ['editor']
    },
    {
        path: '/drivers/:id',
        roles: ['reader', 'editor']
    }
]