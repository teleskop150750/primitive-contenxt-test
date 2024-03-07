import { AlertDialog, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogTitle, AlertDialogTrigger } from './components/AlertDialog'
import { Dialog, DialogContent, DialogTrigger, DialogTitle, DialogDescription } from './components/Dialog'

function App() {

  return (
    <>
      <AlertDialog>
        <Dialog>
          <DialogTrigger>DialogTrigger</DialogTrigger>
          <DialogContent>
            <DialogTitle>
              DialogTitle
            </DialogTitle>
            <DialogDescription>
              DialogDescription
            </DialogDescription>

            <AlertDialogTrigger>
              AlertDialogTrigger
            </AlertDialogTrigger>

            DialogContent
          </DialogContent>
        </Dialog>

        <AlertDialogContent >
          <AlertDialogTitle >AlertDialogTitle</AlertDialogTitle>
          <AlertDialogDescription >
            AlertDialogDescription
          </AlertDialogDescription>

          <AlertDialogCancel >
            AlertDialogCancel
          </AlertDialogCancel>
        </AlertDialogContent>
      </AlertDialog>
    </>
  )
}

export default App
