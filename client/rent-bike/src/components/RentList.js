import Headline from "../common/Headline";
import Stripe from "../common/Stripe";
import Button from "../common/Button";

export default function RentList() {
  return (
    <div className={'rent-list mb-5'}>
      <Headline className={'mb-3'} emoji={'🤩'} title={'Your rent'} appendix={'(Total: $12.99)'}/>
      <Stripe className={'background-light'}>
        <div className={'col d-flex align-items-center'}>Superfast bicycle / Custom / $12.99</div>
        <div className={'col d-flex justify-content-end'}><Button theme={'warn'}>Cancel rent</Button></div>
      </Stripe>
    </div>
  );
}
