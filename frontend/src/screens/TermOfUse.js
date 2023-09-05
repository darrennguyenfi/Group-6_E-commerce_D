import React from 'react';
import Footer from '../components/Footer';
import '../scss/policy.scss';
import { NavLink } from 'react-router-dom';

function TermOfUse() {
    return (
        <div className="cover">
            <div className="term-of-use">
                <h1>ĐIỀU KHOẢN SỬ DỤNG</h1>
                <p>
                    Chào mừng quý khách đến mua sắm tại{' '}
                    <font color="red">HACHIKO</font>. Sau khi truy cập vào
                    website <font color="red">HACHIKO</font> để tham khảo hoặc
                    mua sắm, quý khách đã đồng ý tuân thủ và ràng buộc với những
                    quy định của <font color="red">HACHIKO</font>. Vui lòng xem
                    kỹ các quy định và hợp tác với chúng tôi để xây dựng 1
                    website <font color="red">HACHIKO</font> ngày càng thân
                    thiện và phục vụ tốt những yêu cầu của chính quý khách.
                    Ngoài ra, nếu có bất cứ câu hỏi nào về những thỏa thuận trên
                    đây, vui lòng email cho chúng tôi qua địa chỉ{' '}
                    <b>support_hachiko@gmail.com</b>
                </p>
                <h3>Tài khoản của khách hàng</h3>
                <p>
                    Khi sử dụng dịch vụ <font color="red">HACHIKO</font>, quý
                    khách sẽ cung cấp cho chúng tôi thông tin về địa chỉ email,
                    mật khẩu và họ tên để có được 1 tài khoản tại đây. Việc sử
                    dụng và bảo mật thông tin tài khoản là trách nhiệm và quyền
                    lợi của quý khách khi sử dụng{' '}
                    <font color="red">HACHIKO</font>. Ngoài ra, những thông tin
                    khác trong tài khoản như tên tuổi, địa chỉ.... là những
                    thông tin sẽ giúp <font color="red">HACHIKO</font> phục vụ
                    quý khách tốt nhất. Trong trường hợp thông tin do quý khách
                    cung cấp không đầy đủ hoặc sai dẫn đến việc không thể giao
                    hàng cho quý khách, chúng tôi có quyền đình chỉ hoặc từ chối
                    phục vụ, giao hàng mà không phải chịu bất cứ trách nhiệm nào
                    đối với quý khách. Khi có những thay đổi thông tin của quý
                    khách, vui lòng cập nhật lại thông tin trong tài khoản tại{' '}
                    <font color="red">HACHIKO</font>. Quý khách phải giữ kín mật
                    khẩu và tài khoản, hoàn toàn chịu trách nhiệm đối với tất cả
                    các hoạt động diễn ra thông qua việc sử dụng mật khẩu hoặc
                    tài khoản của mình. Quý khách nên đảm bảo thoát khỏi tài
                    khoản tại <font color="red">HACHIKO</font> sau mỗi lần sử
                    dụng để bảo mật thông tin của mình
                </p>
                <h3>Quyền lợi bảo mật thông tin của khách hàng</h3>
                <p>
                    Khi sử dụng dịch vụ tại website{' '}
                    <font color="red">HACHIKO</font>, quý khách được đảm bảo
                    rằng những thông tin cung cấp cho chúng tôi sẽ chỉ được dùng
                    để nâng cao chất lượng dịch vụ dành cho khách hàng của{' '}
                    <font color="red">HACHIKO</font> và sẽ không được chuyển
                    giao cho 1 bên thứ ba nào khác vì mục đích thương mại. Thông
                    tin của quý khách tại <font color="red">HACHIKO</font> sẽ
                    được chúng tôi bảo mật và chỉ trong trường hợp pháp luật yêu
                    cầu, chúng tôi sẽ buộc phải cung cấp những thông tin này cho
                    các cơ quan pháp luật.
                </p>
                <h3>
                    Trách nhiệm của khách hàng khi sử dụng dịch vụ của HACHIKO
                </h3>
                <p>
                    Quý khách tuyệt đối không được sử dụng bất kỳ công cụ,
                    phương pháp nào để can thiệp, xâm nhập bất hợp pháp vào hệ
                    thống hay làm thay đổi cấu trúc dữ liệu tại website{' '}
                    <font color="red">HACHIKO</font>. Quý khách không được có
                    những hành động ( thực hiện, cổ vũ) việc can thiệp, xâm nhập
                    dữ liệu của <font color="red">HACHIKO</font> cũng như hệ
                    thống máy chủ của chúng tôi. Ngoài ra, xin vui lòng thông
                    báo cho quản trị web của <font color="red">HACHIKO</font>{' '}
                    ngay khi quý khách phát hiện ra lỗi hệ thống theo số điện
                    thoại <b>(84.09) 18628528</b> hoặc{' '}
                    <b>support_hachiko@gmail.com</b>.
                </p>
                <p>
                    Quý khách không được đưa ra những nhận xét, đánh giá có ý
                    xúc phạm, quấy rối, làm phiền hoặc có bất cứ hành vi nào
                    thiếu văn hóa đối với người khác. Không nêu ra những nhận
                    xét có tính chính trị (tuyên truyền, chống phá, xuyên tạc
                    chính quyền), kỳ thị tôn giáo, giới tính, sắc tộc,...Tuyệt
                    đối cấm mọi hành vi mạo nhận, cố ý tạo sự nhầm lẫn mình là
                    một khách hàng khác hoặc là thành viên Ban Quản Trị HACHIKO.
                </p>
                <h3>Trách nhiệm và quyền lợi của HACHIKO</h3>
                <p>
                    Trong trường hợp có những phát sinh ngoài ý muốn hoặc trách
                    nhiệm của mình, <font color="red">HACHIKO</font> sẽ không
                    chịu trách nhiệm về mọi tổn thất phát sinh. Ngoài ra, chúng
                    tôi không cho phép các tổ chức, cá nhân khác quảng bá sản
                    phẩm tại website <font color="red">HACHIKO</font> mà chưa có
                    sự đồng ý bằng văn bản từ{' '}
                    <font color="red">HACHIKO Corporation</font>. Các thỏa thuận
                    và quy định trong Điều khoản sử dụng có thể thay đổi vào bất
                    cứ lúc nào nhưng sẽ được <font color="red">HACHIKO</font>{' '}
                    Corporation thông báo cụ thể trên website{' '}
                    <font color="red">HACHIKO</font>.
                </p>
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

export default TermOfUse;
