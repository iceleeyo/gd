package com.gudeng.commerce.gd.admin.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import com.gudeng.commerce.gd.admin.service.GrdGiftLogToolService;
import com.gudeng.framework.core2.GdLogger;
import com.gudeng.framework.core2.GdLoggerFactory;

@Controller
public class GrdGiftLogController extends AdminBaseController {
	private static final GdLogger logger = GdLoggerFactory.getLogger(GrdGiftController.class);

	@Autowired
	public GrdGiftLogToolService grdGiftLogService;

}