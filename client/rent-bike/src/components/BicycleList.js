import Headline from "../common/Headline";
import Stripe from "../common/Stripe";
import Button from "../common/Button";

export default function BicycleList() {
  return (
    <div className={'bicycle-list'}>
      <Headline className={'mb-3'} emoji={'🚲'} title={'Available bicycles'} appendix={'(3)'}/>
      <Stripe className={'background-light'}>
        <div className={'col d-flex align-items-center'}>Superfast bicycle / Custom / $12.99</div>
        <div className={'col d-flex justify-content-end'}>
          <Button className={'mr-3'} theme={'primary'}>Rent</Button>
          <Button theme={'warn'}>Delete</Button>
        </div>
      </Stripe>
    </div>
  );
}
