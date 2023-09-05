import React from 'react';
import Footer from '../components/Footer';
import '../scss/components.scss';
import { NavLink } from 'react-router-dom';

function CustomerSecurity() {
    return (
        <div className="cover">
            <header className="signin__header"></header>

            <div className="customer-security-policy">
                <h1>CHÍNH SÁCH BẢO MẬT THÔNG TIN CÁ NHÂN CỦA KHÁCH HÀNG</h1>
                <p>
                    HACHIKO mong muốn đem lại một tiện ích mua hàng trực tuyến
                    tin cậy, tiết kiệm và thấu hiểu người dùng. Chúng tôi nhận
                    thấy khách hàng sử dụng website Hachiko.com để mua sắm nhưng
                    không phải ai cũng mong muốn chia sẻ thông tin cá nhân của
                    mình. Chúng tôi, Công ty HACHIKO, tôn trọng quyền riêng tư
                    của khách hàng và cam kết bảo mật thông tin cá nhân của
                    khách hàng khi khách hàng tin vào chúng tôi cung cấp thông
                    tin cá nhân của khách hàng cho chúng tôi khi mua sắm tại
                    website Hachiko.com. Đây là nguyên tắc khi tiếp cận quyền
                    riêng tư, thông tin cá nhân tại website Hachiko.com.
                </p>
                <p>
                    Chính Sách Bảo Mật Thông Tin Cá Nhân này bao gồm các nội
                    dung:
                </p>
                <ol>
                    <li>Sự Chấp Thuận</li>
                    <li>Mục Đích Thu Thập</li>
                    <li>Phạm Vi Thu Thập</li>
                    <li>Thời Gian Lưu Trữ</li>
                    <li>Không Chia Sẻ Thông Tin Cá Nhân Khách Hàng</li>
                    <li>An Toàn Dữ Liệu</li>
                    <li>Quyền Của Khách Hàng Đối Với Thông Tin Cá Nhân</li>
                    <li>Thông Tin Liên Hệ</li>
                    <li>Đơn Vị Thu Thập và Quản Lý Thông Tin</li>
                    <li>Hiệu lực</li>
                </ol>
                <h3>1. Sự Chấp Thuận</h3>
                <p>
                    Bằng việc trao cho chúng tôi thông tin cá nhân của bạn,
                    HACHIKO đồng ý rằng thông tin cá nhân của bạn sẽ được thu
                    thập, sử dụng như được nêu trong Chính Sách này. Nếu bạn
                    không đồng ý với Chính Sách này, bạn dừng cung cấp cho chúng
                    tôi bất cứ thông tin cá nhân nào và/hoặc sử dụng các quyền
                    như được nêu tại Mục 7 dưới đây. Chúng tôi bảo lưu quyền sửa
                    đổi, bổ sung nhằm hoàn thiện đối với Chính Sách này vào bất
                    kỳ thời điểm nào. Chúng tôi khuyến khích bạn thường xuyên
                    xem lại Chính Sách Bảo Mật Thông Tin Cá Nhân này để có được
                    những cập nhật mới nhất đảm bảo bạn biết và thực hiện quyền
                    quản lý thông tin cá nhân của bạn.
                </p>
                <h3>2. Mục Đích Thu Thập</h3>
                <p>
                    {' '}
                    Chúng tôi thu thập thông tin cá nhân chỉ cần thiết nhằm phục
                    vụ cho các mục đích:
                </p>
                <ul>
                    <li>
                        Đơn Hàng: để xử lý các vấn đề liên quan đến đơn đặt hàng
                        của bạn
                    </li>
                    <li>
                        Duy Trì Tài Khoản: để tạo và duy trình tài khoản của bạn
                        với chúng tôi, bao gồm cả các chương trình khách hàng
                        thân thiết hoặc các chương trình thưởng đi kèm với tài
                        khoản của bạn
                    </li>
                    <li>
                        Dịch Vụ Người Tiêu Dùng, Dịch Vụ Chăm Sóc Khách Hàng:
                        bao gồm các phản hồi cho các yêu cầu, khiếu nại và phản
                        hồi của bạn
                    </li>
                    <li>
                        Cá Nhân Hóa: Chúng tôi có thể tổ hợp dữ liệu được thu
                        thập để có một cái nhìn hoàn chỉnh hơn về một người tiêu
                        dùng và từ đó cho phép chúng tôi phục vụ tốt hơn với sự
                        cá nhân hóa mạnh hơn ở các khía cạnh, bao gồm nhưng
                        không giới hạn: (i) để cải thiện và cá nhân hóa trải
                        nghiệm của bạn trên Hachiko.com (ii) để cải thiện các
                        tiện ích, dịch vụ, điều chỉnh chúng phù hợp với các nhu
                        cầu được cá thể hóa và đi đến những ý tưởng dịch vụ mới
                        (iii) để phục vụ bạn với những giới thiệu, quảng cáo
                        được điều chỉnh phù hợp với sự quan tâm của bạn
                    </li>
                    <li>
                        An Ninh: cho các mục đích ngăn ngừa các hoạt động phá
                        hủy tài khoản người dùng của khách hàng hoặc các hoạt
                        động giả mạo khách hàng
                    </li>
                    <li>
                        Theo yêu cầu của pháp luật: tùy quy định của pháp luật
                        vào từng thời điểm, chúng tôi có thể thu thập, lưu trữ
                        và cung cấp theo yêu cầu của cơ quan nhà nước có thẩm
                        quyền
                    </li>
                </ul>
                <h3>3. Phạm Vi Thu Thập</h3>
                <p>Chúng tôi thu thập thông tin cá nhân của bạn khi:</p>
                <ul>
                    <li>
                        Bạn trực tiếp cung cấp cho chúng tôi. Đó là các thông
                        tin cá nhân bạn cung cấp cho chúng tôi được thực hiện
                        chủ yếu trên website Hachiko.com bao gồm: họ tên, địa
                        chỉ thư điện tử (email), số điện thoại, địa chỉ, thông
                        tin đăng nhập tài khoản bao gồm thông tin bất kỳ cần
                        thiết để thiết lập tài khoản ví dụ như tên đăng nhập,
                        mật khẩu đăng nhập, ID/địa chỉ đăng nhập và câu hỏi/trả
                        lời an ninh
                    </li>
                    <li>
                        Bạn tương tác với chúng tôi. Chúng tôi sử dụng cookies
                        và công nghệ theo dấu khác để thu thập một số thông tin
                        khi bạn tương tác trên website Hachiko.com.
                    </li>
                    <li>
                        Từ những nguồn hợp pháp khác. Chúng tôi có thể sẽ thu
                        thập thông tin cá nhân từ các nguồn hợp pháp khác.
                    </li>
                </ul>
                <h3>4. Thời Gian Lưu Trữ</h3>
                <p>
                    Thông tin cá nhân của khách hàng sẽ được lưu trữ cho đến khi
                    khách hàng có yêu cầu hủy bỏ hoặc khách hàng tự đăng nhập và
                    thực hiện hủy bỏ. Trong mọi trường hợp thông tin cá nhân của
                    khách hàng sẽ được bảo mật trên máy chủ của HACHIKO
                </p>
                <h3>5. Không Chia Sẻ Thông Tin Cá Nhân Khách Hàng</h3>
                <p>
                    Chúng tôi sẽ không cung cấp thông tin cá nhân của bạn cho
                    bất kỳ bên thứ ba nào, trừ một số hoạt động cần thiết dưới
                    đây:
                </p>
                <ul>
                    <li>
                        Các đối tác là bên cung cấp dịch vụ cho chúng tôi liên
                        quan đến thực hiện đơn hàng và chỉ giới hạn trong phạm
                        vi thông tin cần thiết cũng như áp dụng các quy định đảm
                        bảo an ninh, bảo mật các thông tin cá nhân.
                    </li>
                    <li>
                        Chúng tôi có thể sử dụng dịch vụ từ một nhà cung cấp
                        dịch vụ là bên thứ ba để thực hiện một số hoạt động liên
                        quan đến website Hachiko.com và khi đó bên thứ ba này có
                        thể truy cập hoặc xử lý các thông tin cá nhân trong quá
                        trình cung cấp các dịch vụ đó. Chúng tôi yêu cầu các bên
                        thứ ba này tuân thủ mọi luật lệ về bảo vệ thông tin cá
                        nhân liên quan và các yêu cầu về an ninh liên quan đến
                        thông tin cá nhân.
                    </li>
                    <li>
                        Các chương trình có tính liên kết, đồng thực hiện, thuê
                        ngoài cho các mục đích được nêu tại Mục 2 và luôn áp
                        dụng các yêu cầu bảo mật thông tin cá nhân.
                    </li>
                    <li>
                        Yêu cầu pháp lý: Chúng tôi có thể tiết lộ các thông tin
                        cá nhân nếu điều đó do luật pháp yêu cầu và việc tiết lộ
                        như vậy là cần thiết một cách hợp lý để tuân thủ các quy
                        trình pháp lý.
                    </li>
                    <li>
                        Chuyển giao kinh doanh (nếu có): trong trường hợp sáp
                        nhập, hợp nhất toàn bộ hoặc một phần với công ty khác,
                        người mua sẽ có quyền truy cập thông tin được chúng tôi
                        lưu trữ, duy trì trong đó bao gồm cả thông tin cá nhân.
                    </li>
                </ul>
                <h3>6. An Toàn Dữ Liệu</h3>
                <p>
                    Chúng tôi luôn nỗ lực để giữ an toàn thông tin cá nhân của
                    khách hàng, chúng tôi đã và đang thực hiện nhiều biện pháp
                    an toàn, bao gồm:
                </p>
                <ul>
                    <li>
                        Bảo đảm an toàn trong môi trường vận hành: chúng tôi lưu
                        trữ không tin cá nhân khách hàng trong môi trường vận
                        hành an toàn và chỉ có nhân viên, đại diện và nhà cung
                        cấp dịch vụ có thể truy cập trên cơ sở cần phải biết.
                        Chúng tôi tuân theo các tiêu chuẩn ngành, pháp luật
                        trong việc bảo mật thông tin cá nhân khách hàng.
                    </li>
                    <li>
                        Trong trường hợp máy chủ lưu trữ thông tin bị hacker tấn
                        công dẫn đến mất mát dữ liệu cá nhân khách hàng, chúng
                        tôi sẽ có trách nhiệm thông báo vụ việc cho cơ quan chức
                        năng để điều tra xử lý kịp thời và thông báo cho khách
                        hàng được biết.
                    </li>
                    <li>
                        Các thông tin thanh toán: được bảo mật theo tiêu chuẩn
                        ngành.
                    </li>
                </ul>
                <h3>7. Quyền Của Khách Hàng Đối Với Thông Tin Cá Nhân</h3>
                <p>
                    Khách hàng có quyền cung cấp thông tin cá nhân cho chúng tôi
                    và có thể thay đổi quyết định đó vào bất cứ lúc nào. Khách
                    hàng có quyền tự kiểm tra, cập nhật, điều chỉnh thông tin cá
                    nhân của mình bằng cách đăng nhập vào tài khoản và chỉnh sửa
                    thông tin cá nhân hoặc yêu cầu chúng tôi thực hiện việc này.
                </p>
                <h3>8. Thông Tin Liên Hệ</h3>
                <p>
                    Nếu bạn có câu hỏi hoặc bất kỳ thắc mắc nào về Chính Sách
                    này hoặc thực tế việc thu thập, quản lý thông tin cá nhân
                    của chúng tôi, xin vui lòng liên hệ với chúng tôi bằng cách:
                    <br />
                    Gọi điện thoại đến hotline: 0918628528
                    <br />
                    Gửi thư điện tử đến địa chỉ email: support_hachiko@gmail.com
                </p>
                <h3>9. Đơn Vị Thu Thập và Quản Lý Thông Tin</h3>
                <p>
                    Công ty Cổ phần Phát Hành Sách TP HCM - Hachiko
                    <br />
                    Thành lập và hoạt động theo Giấy chứng nhận đăng ký doanh
                    nghiệp số: 0304132047 do Sở Kế hoạch và Đầu tư thành phố Hồ
                    Chí Minh cấp, đăng ký lần đầu ngày 9 tháng 7 năm 2023.
                    <br />
                    Trụ sở chính: 225 Nguyễn Văn Cừ, Phường 1, Quận 5, Thành phố
                    Hồ Chí Minh.
                    <br />
                    Địa chỉ liên hệ: 225 Nguyễn Văn Cừ, Phường 1, Quận 5, Thành
                    phố Hồ Chí Minh.
                </p>
                <h3>
                    Hiệu lực Chính Sách Bảo Mật Thông Tin Cá Nhân này có hiệu
                    lực từ ngày 09/07/2023.
                </h3>
            </div>
            <button className="Backbtn">
                <NavLink to="/" className="link_decorate">
                    Back
                </NavLink>
            </button>
            <Footer />
        </div>
    );
}

export default CustomerSecurity;
