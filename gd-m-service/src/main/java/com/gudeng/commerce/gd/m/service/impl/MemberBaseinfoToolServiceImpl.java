package com.gudeng.commerce.gd.m.service.impl;

import java.net.MalformedURLException;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.caucho.hessian.client.HessianProxyFactory;
import com.gudeng.commerce.gd.customer.dto.MemberBaseinfoDTO;
import com.gudeng.commerce.gd.customer.entity.MemberBaseinfoEntity;
import com.gudeng.commerce.gd.customer.service.MemberBaseinfoService;
import com.gudeng.commerce.gd.m.service.MemberBaseinfoToolService;
import com.gudeng.commerce.gd.m.util.GdProperties;

/**
 * 功能描述：
 */
@Service
public class MemberBaseinfoToolServiceImpl implements MemberBaseinfoToolService {

	/** hessian 接口配置工具 **/
	@Autowired
	public GdProperties gdProperties;

	private static MemberBaseinfoService memberBaseinfoService;

	/**
	 * 功能描述: memberBaseinfoService 接口服务
	 *
	 * @param
	 * @return
	 */
	protected MemberBaseinfoService getHessianMemberBaseinfoService() throws MalformedURLException {
		String url = gdProperties.getMemberBaseinfoUrl();
		if (memberBaseinfoService == null) {
			HessianProxyFactory factory = new HessianProxyFactory();
			factory.setOverloadEnabled(true);
			memberBaseinfoService = (MemberBaseinfoService) factory.create(MemberBaseinfoService.class, url);
		}
		return memberBaseinfoService;
	}

	@Override
	public int addMemberBaseinfoDTO(MemberBaseinfoDTO mb) throws Exception {
		return getHessianMemberBaseinfoService().addMemberBaseinfoDTO(mb);
		// return 0;
	}

	@Override
	public Long addMemberBaseinfoEnt(MemberBaseinfoEntity mb) throws Exception {
		return getHessianMemberBaseinfoService().addMemberBaseinfoEnt(mb);
	}

	@Override
	public int deleteById(String id) throws Exception {
		return getHessianMemberBaseinfoService().deleteById(id);
	}

	@Override
	public int updateMemberBaseinfoDTO(MemberBaseinfoDTO mb) throws Exception {
		return getHessianMemberBaseinfoService().updateMemberBaseinfoDTO(mb);
	}

	@Override
	public MemberBaseinfoDTO getById(String id) throws Exception {
		return getHessianMemberBaseinfoService().getById(id);
	}

	@Override
	public MemberBaseinfoDTO getByMobile(String mobile) throws Exception {
		return getHessianMemberBaseinfoService().getByMobile(mobile);
	}

	@Override
	public MemberBaseinfoDTO getByAccount(String account) throws Exception {
		return getHessianMemberBaseinfoService().getByAccount(account);
	}

	@Override
	public List<MemberBaseinfoDTO> getByNickName(Map map) throws Exception {
		return getHessianMemberBaseinfoService().getByNickName(map);
	}

	@Override
	public int getTotal(Map map) throws Exception {
		return getHessianMemberBaseinfoService().getTotal(map);
	}

	@Override
	public List<MemberBaseinfoDTO> getAll(Map map) throws Exception {
		return getHessianMemberBaseinfoService().getAll(map);
	}

	@Override
	public List<MemberBaseinfoDTO> getBySearch(Map map) throws Exception {
		return getHessianMemberBaseinfoService().getBySearch(map);
	}

	@Override
	public int updateUserType(Long memberId, Integer userType) throws Exception {
		return getHessianMemberBaseinfoService().updateUserType(memberId, userType);
	}

	/**
	 * @Description getCompany 获取公司列表
	 * @return
	 * @throws Exception
	 * @CreationDate 2015年11月11日 下午4:10:10
	 * @Author lidong(dli@cnagri-products.com)
	 */
	@Override
	public List<MemberBaseinfoDTO> getCompany() throws Exception {
		return getHessianMemberBaseinfoService().getCompany();
	}

	public List<MemberBaseinfoDTO> getCompanyByCondition(Map<String, Object> map) throws Exception {
		return getHessianMemberBaseinfoService().getCompanyByCondition(map);
	}

	public int getCompanyByConditionTotal(Map<String, Object> map) throws Exception {
		return getHessianMemberBaseinfoService().getCompanyByConditionTotal(map);
	}

	@Override
	public MemberBaseinfoDTO queryMemberInfoForPromotion(Map<String, Object> params) throws Exception {
		return getHessianMemberBaseinfoService().queryMemberInfoForPromotion(params);
	}
	
	@Override
	public MemberBaseinfoDTO getByAccountNoCer(String account) throws Exception {
		return getHessianMemberBaseinfoService().getByAccountNoCer(account);
	}
}
