import { Link } from "react-router-dom"

export const PageNotFound = () => {
  return (
    <div className="text-center">
      <div>404 PageNot Found</div>
      <Link className="btn btn-primary" to='/auth/signin'>Go To HOME</Link>
    </div>
  )
}
