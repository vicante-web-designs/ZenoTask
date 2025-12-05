import Button from '../common/Button';

function Navbar(){
    return(
        <nav className='flex justify-between px-4 py-2 items-center'>
            <h3 className='font-bold text-xl text-blue-900'>
                ZenoTask
            </h3>
            
            <div className='flex gap-2'>
                <Button 
                type='button'
                variant='primary'
                label='TRY FOR FREE'
                />
                <Button 
                type='button'
                variant='secondary'
                label='VIEW DASHBOARD'
                />
            </div>
        </nav>
    )
}

export default Navbar;