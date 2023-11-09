function Card({ item }) {
  return (
    <div class="col-xl-3 col-md-6 mb-4 card1">
      <div class={`"card border-left-${item.serielnumber} shadow h-100 py-2"`}>
        <div class="card-body">
          <div class="row no-gutters align-items-center">
            <div class="col mr-2">
              <div class="text-xs text-uppercase mb-1">
                <span className="serielnum">{item.serielnumber} </span>
                {item.title}
              </div>
              <div class="h5 mb-0 text-gray-800">{item.para}</div>
            </div>
            <div class="col-auto">
              <i class="fas fa-calendar fa-2x text-gray-300"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Card;
